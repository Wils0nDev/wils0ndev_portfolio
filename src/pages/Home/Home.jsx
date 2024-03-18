import { useEffect, useState } from "react";
import wilson from "../../assets/img/wilson_avatar.png";
import "./Home.css";
import style from "./home.module.scss";
import Parallax from "../../components/Parallax";
import { CustomButton } from "../../components/CustomButtom";
import { Link } from "@mui/material";

export const Home = () => {
  const social_media = [
    {
      url:'https://github.com/Wils0nDev',
      name:'logo-github'
    },
    {
      url:'https://www.instagram.com/ewilsonvasquezc/',
      name:'logo-instagram'
    },
    {
      url:'https://www.linkedin.com/in/edgar-wilson-vasquez-coronado/',
      name:'logo-linkedin'
    }
  ];


  const words = [
    "la tecnología",
    "la programación",
    "la música",
    "y el futbol",
  ];

  const [word, setWord] = useState(""); // Palabra actual
  const [wordIndex, setWordIndex] = useState(0); // Letra actual
  const [index, setIndex] = useState(0); // Índice de la palabra actual

  useEffect(() => {
    const wordInterval = setInterval(
      () => {
        if (wordIndex < words[index].length) {
          setWord((prevWord) => prevWord + words[index][wordIndex]);
          setWordIndex((prevIndex) => prevIndex + 1);
        } else {
          // Esperar 1 segundo antes de mostrar la siguiente palabra
          setWordIndex(0);
          setIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
          setWord("");
        }
      },
      wordIndex < words[index].length ? 100 : 1000
    );

    return () => clearInterval(wordInterval);
  }, [index, wordIndex]);

  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center max-w-full py-24 mt-0 xl:py-28 h-6/6 from-indigo-600 to-cyan-500 bg-gradient-to-r md:flex-row"
      >
        <div className="flex items-center justify-center flex-1 rounded-full md:w-5">
          <img
            src={wilson}
            alt="wilson"
            className="object-cover rounded-full img_home md:w-3/4 sm:w-1/2 xl:w-96"
          />
        </div>
        <div className="flex-1">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold leading-10 md:text-5xl md:leading-normal">
              <span
                className={`${style.texto} text-2xl greet text-w md:text-4xl md:leading-normal `}
              >
                Hola!, Soy Wilson
                <br />
              </span>
            </h1>
            <h3 className="mt-4 text-lg font-bold leading-5 text-indigo-100 md:text-5xl md:leading-normal xl:leading-3">
              Desarrollador FullStack y{" "}
            </h3>
            <h3 className="mt-4 text-lg font-bold leading-5 text-indigo-100 md:text-5xl md:leading-11 xl:leading-normal">
              apasionado por {word}
            </h3>
            {/* <button className="btn-primary">Contactame</button> */}
            <div className="flex flex-row justify-start mt-8 mb-8">
            <CustomButton />

            </div>
            <div className="flex items-center justify-center gap-5 mt-20 text-3xl md:justify-start ">
              {social_media?.map((icon) => (
                <div key={icon.name} className="text-gray-900 cursor-pointer hover:text-white xl:ml-3 md:ml-3">
                    <Link
                      color="inherit"
                      href={icon.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      
                    >
                      <ion-icon name={icon.name}></ion-icon>
                    </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Parallax />
    </>
  );
};
