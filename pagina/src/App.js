'use client';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Maquetación from './components/Maquetación';
import Donaciones from './components/Donaciones';
import Contactos from './components/Contactos';
import Ayuda from './components/Ayuda';
import Footer from './components/Footer';

import './css/General.css';

export default function App() {
  return (
    <>
      <Maquetación />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className='main'>
                <aside>
                  <h2>Libertad</h2>
                  
                   <strong><i>La Libertad Es No Hacer Todo Lo Que Quiero Aun Cuando Puedo</i></strong>
                   <strong><i>Es Elegir Hacer Lo Justo ...</i></strong>
                   <strong><i>El Que Hace Todo Lo Que Quiere Aun Cuando Es Malo, Es El Verdadero Esclavo</i></strong>
                  <p>
                    La libertad no se determina en este mundo , la determina Dios...
                    No podemos perder la Fé...
                    <br></br>
                    Hace miles de años <strong>Dios</strong> Libero a su pueblo Llamado Israel del Mayor Imperio conocido en ese momento...
                    <br></br>
                    Hizo grandes maravillas imposibles para el hombre ... 
                    <br></br> Recuerda eso cuando te sientas cansado y solo
                    Nunca Pierdan la Fé ...

                  </p>
                </aside>
              </div>

              

              <div className='mainc'>
                <article>
               <h2>Modelo LIBERTADORES de COLOMBIA.</h2>

                  <p>La base del Proyecto es formar personas Capaces , Disciplinadas , 
                      Fuertes. Abarcando las areas mas importantes en la vida de la persona...
                      En Colombia no se esta formando personas capaces de dar un 100%...<br></br>
                      Por ende despues de mucho pensarlo y mirar diferentes culturas , modelos politicos , educativos , religiosos ,entre otras
                      Se Ha Decidido usar un nuevo modelo De: Formación , Industrial , Economico, Administrativo, Politico , Religioso , Social , Legislativo y Judicial
                  
                      La idea es ayudar a construir una colombia mejor asi que si ven el modelo y les agrada en algun sentido seria bueno utilizar las cosas que vean 
                      Siempre y cuando sea para lago Bueno delante del Unico Dios Verdadero

                  Este es un resumén somero del plan de acción , Solo estamos viendo la idea principal del texto , aunque como ya se ha dicho se profundiza para ser de ayuda a lograr un progreso real en Colombia
                  </p>
                </article>

              </div>

              <div className='mainb'>
                <article>
                  <div className='ide'>
                  <h2>IDEOLOGIA</h2>
                  Progreso
                  <hr/>
                  Disciplina
                  <hr/>
                  Perseverancia
                  <hr/>
                  Constancia
                  <hr/>
                  Respeto
                  <hr/>
                  Tolerancia
                  <hr/>
                  Sinceridad
                  <hr/>
                  Justicia
                  <hr/>
                  Amor
                  <hr/>
                  Fé
                  <hr/>
                  DIOS
                  <hr></hr>
                  <br></br>
                  </div>
                  <p>
                  Basándonos en 4 pilares

                  FISICO
                  ESPIRITUAL
                  EMOCIONAL
                  COGNITIVO/PSICOLOGICO



                  Se trabajara la mentalidad de la persona para que aprenda a estar solo , a controlar sus pensamientos
                  y a utilizarlos a su favor, con el desarrollo la persona  ira comprendiendo los puntos de este plan y
                  los adquirira como propios
                  </p>
                 <br></br> 
                 <div className='jp'>
                  <strong className='sa'>Japones</strong>
                  <p><strong><i> Jiritsu Meiyo Chūjitsu Shi.</i></strong></p>
                  <p><strong><i> Disciplina Honor Lealtad Muerte</i></strong></p>
                  </div>
                  
                  
                </article>
              </div>

              <div className='maind'>
              <h2 className='hd'>
                PROFESIONAL
              </h2>
              <p className='pd'>

              yEn el marco del fortalecimiento del sistema educativo, se reconoce que los procesos de transformación 
              ycultural y pedagógica presentan mayores niveles de resistencia en poblaciones adultas, debido a la consolidación 
              yde hábitos, creencias y prácticas a lo largo del tiempo. Por tanto, las estrategias de reforma deben priorizar su
              y implementación en las primeras generaciones, donde la capacidad de adaptación y formación de nuevos paradigmas
              y resulta significativamente mayor.

              yEn este sentido, se propone una reestructuración integral del cuerpo profesional educativo, iniciando por áreas
              yestratégicas del sistema. Esta transformación implica la asignación prioritaria de recursos al entorno escolar,
                ygarantizando condiciones óptimas de funcionamiento, supervisión y calidad en los procesos de enseñanza-aprendizaje
                y. El modelo resultante, una vez validado, podrá ser escalado progresivamente a otros sectores del país.

              yEl rol del profesional docente se define como crítico e irremplazable dentro del sistema. Cada educador impacta de
              ymanera directa en la formación de entre 30 y 60 estudiantes por aula, lo que amplifica exponencialmente tanto los
                yaciertos como los errores en su ejercicio profesional. En consecuencia, se establece la necesidad de mecanismos
                yrigurosos de evaluación, seguimiento y control del desempeño docente.

              yBajo este enfoque, el ejercicio de la docencia no puede depender exclusivamente de la vocación individual. Si bien el 
              ycompromiso personal es deseable, el cumplimiento de los estándares educativos definidos por la política pública es 
              yobligatorio. Por tanto, el docente deberá ajustar su práctica pedagógica a los lineamientos institucionales establecidos, priorizando
              yel desarrollo integral del estudiante por encima de criterios subjetivos o discrecionales.

              yFinalmente, se concluye que la principal limitación del sistema no radica en la capacidad de los actores involucrados,
              ysino en la insuficiencia de mecanismos de exigencia, control y responsabilidad. En consecuencia, la política 
              yeducativa deberá orientarse hacia el fortalecimiento de dichos mecanismos, asegurando el cumplimiento efectivo
                yde los objetivos formativos establecidos.

              </p>
              </div>
            </>
          }
        />

        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/Ayuda" element={<Ayuda />} />
      </Routes>
          <Footer></Footer>

    </>
  );
}