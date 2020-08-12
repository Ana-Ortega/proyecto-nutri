import React from 'react';
import './../css/estilos.css';
import Header from './../componentes/Header';
import Footer from './../componentes/Footer';
import ImagenNutri from './../imagenes/nutriologa_encabezado.jpg';

  function Nutriologa(){
    return(
      <div>
        <Header/>
        <div className="wrapper">
          <section  className="contenido">
            <img src={ImagenNutri} />
          </section>
      </div>
      <div className="wrapper">
        <h3 className="">Nutriologa</h3>
        <p>
          La Dra. Navarro Sánchez es fundadora de la Clínica de Nutrición. Orgullosa de contar con 10 años desde que abrió las puertas de su consultorio, contribuyendo en mejorar la calidad de vida de miles de personas.  </p>
        <p>
          Motivada por su compromiso a mejorar el servicio que ofrecía, obtuvo con Graduación de Honor, un Máster en Nutrición Clínica en Enfermedades Crónicas No Transmisibles, como diabetes mellitus, obesidad, sobrepeso, hipertensión arterial, dislipidemia, enfermedades cardiovasculares y síndrome metabólico, en la Universidad de Costa Rica en el 2015.  </p>
        <p>
          Como parte de su proyecto de graduación, realizó una investigación en adultos con Síndrome Metabólico, abordando una terapia nutricional NOVEDOSA basada en la motivación y en estrategias de educación nutricional terapeútica, con el fin de guiar al paciente hacia un CAMBIO saludable en su estilo de vida.  En su marco de especialización ha publicado en revistas científicas de alcance latinoamericano así como en revistas de circulación nacional.  </p>
        <p>
          La licenciatura la obtuvo en la Universidad Hispanoamericana, y se incorporó al Colegio de Profesionales en Nutrición de Costa Rica (CPN 824-11).    </p>
        <p>
          La Dra. se caracteriza por ser una nutricionista de confianza, con valores como responsabilidad, ética, conciencia social y honestidad, estos le permiten conocer las necesidades de sus pacientes y crear empatía con ellos para así, atenderlos de la mejor manera posible. Además, su deseo por ser la mejor en su campo es enorme, por esto siempre se mantiene actualizada en temas de nutrición para ofrecer lo mejor de sus conocimientos y así promover la salud.  </p>
        <p>
          Por otro lado, una de sus pasiones es el ejercicio, desde hace 15 años practica Resistencia Aeróbica. Por lo mismo, participó en el programa de Nutrición Deportiva de la Institución Argentina, “Grupo Sobre entrenamiento”. Para así lograr mediante la Nutrición un mejor rendimiento en el ejercicio, ya sea de entrenamiento, competencia o recreativo. Esto le ha permitido trabajar en varios gimnasios y tener convenios, como Gimnasio 360 fitness, Gimnasio Salud y Forma, Arenilla Gym, ASETEC y Fisiodeporte, todos del área de Cartago.  
        </p>
      </div>
        <Footer/>
      </div>

    );
  }

export default Nutriologa;