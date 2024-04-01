import {
  BriefcaseIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const Nabvar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  let Links = [
    { name: "Home", link: "home" },
    { name: "Acerca de mi ", link: "about" },
    { name: "Proyectos", link: "projects" },
    { name: "Tecnologías", link: "technologys" },
    { name: "Contacto", link: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handlerNav = () => {
    console.log("hola");  
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={
        scrolled
          ? "fixed top-0 left-0 w-full bg-light-blue-800 shadow-md z-20"
          : "fixed top-0 left-0 w-full bg-transparent shadow-md z-20"
      }
    >
      <div className="items-center justify-between py-4 bg-transparent md:px-10 px-7 md:flex ">
        {/** logo */}
        <div className="flex items-center gap-2 text-2xl text-white cursor-pointer">
          <BriefcaseIcon className="w-6 h-6 text-cyan-400" />
          <span className="font-bold ">Wils0nDev</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={handlerNav}
          className="absolute cursor-pointer w-7 h-7 right-8 top-6 md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* nav links aqui  */}
        <ul
          className={scrolled ?  ` bg-light-blue-800 pb-12 md:flex pl-9 md:pl-0 md:items-center 
        md:p-0 absolute md:static md:z-auto z-[-1] left-0 md:w-auto w-full transition-all md:bg-transparent duration-700   ease-out ${
          isOpen ? "top-12" : "top-[-490px]"
        }` :  `pb-12 md:flex pl-9 md:pl-0 md:items-center 
        md:p-0 absolute md:static md:z-auto z-[-1] left-0 md:w-auto w-full transition-all md:bg-transparent duration-700   ease-out ${
          isOpen ? "top-12" : "top-[-490px]"
        }` }
        >
          {Links.map((link) => (
            <li className={scrolled ? `font-bold text-white cursor-pointer  my-7 md:my-0 md:ml-8` : `font-bold text-white cursor-pointer  my-7 md:my-0 md:ml-8` }>
              {/* <a   href={link.link}>{link.name}</a> */}
              <Link
                activeClass="active"
                to={link.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* <button className="px-3 py-1 text-white bg-blue-500 rounded btn md:ml-8">
            Get Started
          </button> */}
        </ul>
      </div>
    </div>
  );
};
