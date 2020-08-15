import React from 'react';
import './../css/estilos.css';
import Header from './../componentes/Header';
import Footer from './../componentes/Footer';
import ImagenSana from './../imagenes/alimentacionsana.jpg';


  function AlimentacionSana(){
    return(
      <div>
        
        <Header/>
        <div className="wrapper">
          <section  className="contenido">
            <img src={ImagenSana} />
          </section>
        </div>

        <div className="wrapper">
          <h3 className="">Alimentación Sana</h3>
          <p className="">
            No busques una DIETA que terminará algún día... comienza un ESTILO DE VIDA SALUDABLE que dure para siempre
          </p>
          <p>
            La idea de ir donde un Nutricionista, no es pasar contando calorías, lo que se trata de hacer, es que APRENDA a ALIMENTARSE BIEN, para mejorar su estilo de vida, no que pase a dieta toda la vida. Todos le hemos temido a esta palabra, “dieta”, y la realidad es que a nadie le gusta que le digan que no puede comer, ni mucho menos, estar midiendo porciones de alimentos; pero esto es solo un mito. Así es, les doy la buena noticia: para adelgazar no es necesario morirse de hambre, ni dejar de comer los alimentos que nos gustan, todo es cuestión de saber controlarse en cuanto a cantidades, de escoger alimentos que beneficien nuestra salud y de comer CONCIENTEMENTE.
          </p>
          <p>
            Les comparto los consejos más útiles, para empezar a tener una Alimentación Saludable:
          </p>
          <p>
            Haga 5 tiempos de comida al día (3 tiempos principales y 2 meriendas), esto aumentará su metabolismo y bajará de peso más fácil.
          </p>
          <p>
            Disminuya las porciones de alimentos que normalmente come.
          </p>
          <p>
            Desayune como rey, almuerce como príncipe y cene como mendigo; ya que en la noche nuestro organismo; su proceso de digestión y de hormonas, no funciona igual que en el día.
          </p>
          <p>
            No elimine ningún grupo de alimentos de tu dieta, pero sí escoja los de mejor calidad en cuanto a salud; todos los grupos de alimentos son necesarios en la proporción adecuada, para tener un correcto funcionamiento de nuestro organismo.  
          </p>
          <p>
            Disfrute los alimentos, coma despacio; la digestión empieza al masticar los alimentos, ya que, en la saliva tenemos enzimas digestivas; y además la sensación de llenura llega aproximadamente 20 minutos después de haber empezado a comer.
          </p>
          <p>
            Prefiera alimentos que contengan fibra como frutas (ojalá con cáscara), vegetales, harinas y cereales integrales, leguminosas como frijoles, garbanzos, lentejas, entre otros; la fibra le ayuda a su salud intestinal, mejora los niveles de colesterol, triglicéridos y azúcar en la sangre; y además nos da una mayor sensación de llenura.
          </p>
          <p>
            Consuma diariamente por lo menos 5 porciones entre frutas y vegetales; éstos alimentos tienen muchas vitaminas y minerales, además de agua y fibra, y muchos Antioxidantes, que son componentes de algunos alimentos, que combaten en nuestro organismo los radicales libres, por lo tanto, previenen muchas enfermedades circulatorias, nerviosas, Cáncer, Diabetes, Hipertensión, entre otras.
          </p>
          <p>
            Así, que los invito a que se atrevan a hacer un cambio en sus hábitos de alimentación para tener salud y una mejor calidad de vida! Simplemente, PORQUE SOMOS LO QUE COMEMOS.
          </p>
          <p>
          Si desea más Recomendaciones Nutricionales para tener una Alimentación Saludable, contáctenos o pida una cita, con mucho gusto le atenderemos.
          </p>
        </div>

      <Footer/>
      </div>

    );
  }

export default AlimentacionSana;