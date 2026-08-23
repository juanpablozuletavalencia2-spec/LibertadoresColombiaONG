const express = require('express')
const app = express()

const multer = require('multer')
const cors = require('cors')
const mysql = require('mysql2/promise')
const path = require('path')


// MIDDLEWARES
app.use(express.json())
app.use(cors())


// CARPETA PÚBLICA
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


// MYSQL
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'LC'
})


// CONFIGURAR MULTER
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },

  filename: (req, file, cb) => {

    const unique =
      Date.now() + '-' + Math.round(Math.random() * 1E9)

    const ext = path.extname(file.originalname)

    cb(null, unique + ext)
  }
})


// VALIDAR IMÁGENES
const upload = multer({

  storage: storage,

  limits: {
    fileSize: 1024 * 1024 * 5
  },

  fileFilter: (req, file, cb) => {

    const formatos =
      /jpg|jpeg|png|gif|avif/

    const ext =
      formatos.test(
        path.extname(file.originalname).toLowerCase()
      )

    const mime =
      formatos.test(file.mimetype)

    if (ext && mime) {
      return cb(null, true)
    }

    cb(new Error('Archivo no válido'))
  }
})


// GET TODOS
app.get('/api/usuarios', async (req, res) => {

  try {

    const [result] =
      await db.query('SELECT * FROM productos')

    return res.status(200).json({
      message: 'Usuarios encontrados',
      items: result
    })

  } catch (error) {

    return res.status(500).json({
      error: error.message
    })
  }
})


// GET POR ID
app.get('/api/usuarios/:id', async (req, res) => {

  try {

    const { id } = req.params

    const [result] =
      await db.query(
        'SELECT * FROM productos WHERE id=?',
        [id]
      )

    if (result.length === 0) {

      return res.status(404).json({
        message: 'Usuario no encontrado'
      })
    }

    return res.status(200).json({
      item: result[0]
    })

  } catch (error) {

    return res.status(500).json({
      error: error.message
    })
  }
})


// CREAR USUARIO CON IMAGEN
app.post(
  '/api/usuarios',
  upload.single('imageurl'),

  async (req, res) => {

    try {

      const {
        name,
        password,
        email,
        pais
      } = req.body

      const imageurl =
        req.file
          ? `/uploads/${req.file.filename}`
          : null

      if (
        !name ||
        !password ||
        !email ||
        !pais
      ) {

        return res.status(400).json({
          message: 'Campos obligatorios'
        })
      }

      const [result] = await db.query(

        `INSERT INTO productos
        (name,password,email,pais,imageurl)
        VALUES(?,?,?,?,?)`,

        [
          name,
          password,
          email,
          pais,
          imageurl
        ]
      )

      return res.status(201).json({
        message: 'Usuario creado',
        result
      })

    } catch (error) {

      return res.status(500).json({
        error: error.message
      })
    }
  }
)


// TARJETAS
app.post('/api/tarjetas', async (req, res) => {

  try {

    const {
      name,
      n_Cuenta,
      Banco,
      cvv
    } = req.body

    if (
      !name ||
      !n_Cuenta ||
      !Banco ||
      !cvv
    ) {

      return res.status(400).json({
        message: 'Campos obligatorios'
      })
    }

    const [result] = await db.query(

      `INSERT INTO tarjetas
      (name,n_cuenta,Banco,cvv)
      VALUES(?,?,?,?)`,

      [
        name,
        n_Cuenta,
        Banco,
        cvv
      ]
    )

    return res.status(201).json({
      message: 'Tarjeta creada',
      result
    })

  } catch (error) {

    return res.status(500).json({
      error: error.message
    })
  }
})


// SERVIDOR
app.listen(3000, () => {
  console.log('Servidor funcionando')
})