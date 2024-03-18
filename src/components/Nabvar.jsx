import {
  BriefcaseIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export const Nabvar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Acerca de mi ", link: "/" },
    { name: "Experiencia", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handlerNav = () => {
    console.log("hola");
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent shadow-md">
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
          {isOpen ?   <XMarkIcon />  : <Bars3BottomRightIcon />}
        </div>
        {/* nav links aqui  */}
        <ul
          className={`pb-12 md:flex pl-9 md:pl-0 md:items-center 
        md:p-0 absolute md:static md:z-auto z-[-1] left-0 md:w-auto w-full transition-all bg-transparent duration-700   ease-out ${isOpen ? 'top-12': 'top-[-490px]'}`}
        >
          {Links.map((link) => (
            <li className="font-bold text-white my-7 md:my-0 md:ml-8">
              <a href="/">{link.name}</a>
            </li>
          ))}
          <button className="px-3 py-1 text-white bg-blue-500 rounded btn md:ml-8">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};
