import React from 'react';
import './../css/estilos.css';
import Header from './../componentes/Header';
import Footer from './../componentes/Footer';
import ImagenAdulto from './../imagenes/alimentacionadulto.jpeg';

  function AlimentacionAdultoMAyor(){
    return(
      <div>
        <Header/>
        <div className="wrapper">
          <section  className="contenido">
            <img src= {ImagenAdulto} />
          </section>
        </div>
 
        <div className="wrapper">
          <h3 className="">Alimentación de la persona Adulta Mayor</h3>
            <p class="">
            AlimentARTE le ofrece a nuestros adultos mayores, una atención única para mejorar su calidad de vida, a los que tengan alguna enfermedad que requiera tratamiento nutricional como diabetes, presión alta, colesterol, triglicéridos, derrames, infartos, alimentación por sondas, incluso tenemos el servicio a domicilio a las personas que tengan una movilización limitada.
            </p>
            <p>
            La persona adulta mayor debe contar con una dieta  adecuada y equilibrada que le permita desarrollar sus actividades diarias y mantener un estado de salud satisfactorio.
            </p>
            <p>
            Hay que tomar en cuenta que, en esta edad, el metabolismo se vuelve más lento, la actividad física y el tejido muscular disminuyen y hay acumulación de grasa; por lo que es conveniente consumir alimentos bajos en calorías, que sean apropiados para prevenir o retrasar algunas enfermedades crónicas, como la diabetes y la hipertensión arterial, entre otras.
            </p>
            <p>
            Además, en esta etapa de la vida, ocurren muchos cambios fisiológicos, psicológicos y socioeconómicos que afectan a la nutrición y a la alimentación; por lo mismo, tenemos que cuidar a nuestros viejitos para que logren tener, mediante un estilo de vida saludable, con una alimentación sana y ejercicio; una mayor calidad de vida.
            </p>
            <p>
            Prepare comidas que se vean atractivas, con color, textura y sabor.  
            </p>
            <p>
            Todas las mañanas tome un jugo de naranja o si prefiere se puede comer la naranja; también se recomiendan los jugos de zanahoria con manzana. Los jugos deben consumirse recién preparados para que la luz no destruya la vitamina C.
            </p>
            <p>
            En el desayuno es bueno comer cereales ya que ayudan a prevenir el estreñimiento. Las ciruelas también le ayudarán con este problema.  </p>
            <p>
            Aumente el consumo de frutas y verduras. Consuma frutas ácidas por la mañana y dulces por la tarde, por que producen menos gases.
            </p>
            <p>
            Tome aproximadamente dos litros de líquido al día así podrá orinar con facilidad, prevenir la deshidratación y mejorar el aspecto de la piel.  
            </p>
            <p>
            A la hora de preparar los alimentos y consumirlos tenga presente estos consejos y recuerde que este es un momento ideal para compartir con sus seres queridos, demuéstreles cuanto los ama.  
            </p>
            <p>
            Si desea más Recomendaciones Nutricionales para saber cómo deben alimentarse los adultos mayores, contáctenos o pida una cita, con mucho gusto le atenderemos.
            </p>
        </div>
        <Footer/>

      </div>
    );
  }

export default AlimentacionAdultoMAyor;