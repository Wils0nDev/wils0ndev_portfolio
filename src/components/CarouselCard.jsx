import { Carousel } from "@material-tailwind/react";
import "./scss/carousel.css";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import style from "./scss/cards.module.scss";

export const CarouselCard = () => {
  return (
    <Carousel className="gap-0">
      <div className="w-full">
        <Card
          className={`flex flex-col items-center w-full h-full md:pl-0  md:pr-0 xl:pl-8 xl:pr-0 mt-0 bg-transparent shadow-none`}
        >
          <CardBody>
            <Typography variant="h1" color="white" className="mb-2">
              Como Profesional
            </Typography>
            <h3 className="font-bold leading-10 lg:text-4xl md:text-4xl md:leading-normal">
              <span
                className={`${style.texto} lg:text-4xl greet text-w md:text-4xl md:leading-normal `}
              >
                Soy Wilson!
                <br />
              </span>
            </h3>
            <Typography
              color="white"
              className="mb-4 font-normal xl:text-base md:text-xs sm:text-xs sm:leading-4"
            >
              Desarrollador FullStack cuento con 8 años de experiencia en el
              desarrollo de aplicaciones web, he trabajado con tecnologías como
              Angular,React, y en mis inicios con VanillaJS, así como también
              JQuery y Ajax en el Front, y en el lado del backend con NodeJS,
              .NET , PHP, pero también he dado mantenimiento a aplicaciones con
              tecnologías desarrolladas en Spring Boot, y a nivel de Base datos
              he trabajado con SQLServer, MySQL, MongoDB.
            </Typography>

            <Typography
              color="white"
              className={`${style.card_texto_movil} mb-4 xl:text-base font-normal md:text-xs sm:text-xs sm:leading-4`}
            >
              Actualmente he venido trabajando con la creación de aplicaciones
              basadas en Clean Architecture y principios SOLID.
            </Typography>
            <Typography
              color="white"
              className={`${style.card_texto_movil} mb-4 xl:text-base font-normal md:text-xs sm:text-xs sm:leading-4`}
            >
              Me considero muy autodidacta con habilidades probadas para
              colaborar efectivamente en equipos globales, tengo la capacidad de
              asumir nuevos retos y cumplir con los objetivos del proyecto.
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="w-full">
        <Card
          className={`flex flex-col items-center w-full h-full md:pl-0  md:pr-0 xl:pl-8 xl:pr-0 mt-0 bg-transparent shadow-none`}
        >
          <CardBody>
            <Typography variant="h1" color="white" className="mb-2">
              Como Persona
            </Typography>
            <Typography
              color="white"
              className={`${style.card_texto_movil} mb-4 xl:text-base font-normal `}
            >
              Me considero alguien centrado en mis valores, siendo el respeto y la humildad los valores mas fuertes que rescataría, tambien soy algo confiado lo que a veces me 
              a generado algunos incovenientes. <br/>
              Dentro de lo que me gusta hacer, ademas del Desarrollo de Software, es tocar guitarra y jugar futbol. Estas son dos de mis grandes pasiones que me permiten liberar el estres.
              Pero tambien me gusta estudiar y continuar actualizandome en el mundo de la tecnología, para asi llegar a ser mas competivivo y cumplir mis metas.
              <br/>
              Soy padre de una hermosa niña y esto me enseño a que la unión familiar es muy importante para poder motivarse en seguir luchando por cumplir los objetivos.
              <br/>
              <br/>
              Gracias por llegar hasta aqui ... !! 🙂 
            </Typography>
          </CardBody>
        </Card>
      </div>
    </Carousel>
  );
};
