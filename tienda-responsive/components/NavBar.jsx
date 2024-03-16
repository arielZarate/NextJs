"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
  //==============etates==========
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  //handlers
  const handleNav = () => {
    setNav(!nav);
  };

  //===========useEffect=============

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 200) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 "
    >
      {/* header web */}
      <div className="max-w-[1240px]  m-auto flex items-center justify-between p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className=" font-bold text-4xl">
            Black Monkey
          </h1>
          {/*   <Image
            src="/images/logo2.png" // Cambia esta ruta con la ubicación de tu imagen
            alt="Logo de Black Monkey"
            width={120} // Ajusta el ancho según tus preferencias
            height={20} // Ajusta el alto según tus preferencias
            className="height-[10px] width-full  rounded-2xl"
          /> */}
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden  sm:flex">
          <li>
            <Link href="/" className="p-4">
              Home
            </Link>
          </li>{" "}
          <li>
            <Link href="/#about" className="p-4">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/store" className="p-4">
              Tienda
            </Link>
          </li>
          <li>
            <Link href="/contact" className="p-4">
              Contacto
            </Link>
          </li>
        </ul>

        {/*=============== Mobile================= */}

        {/* ======mobile button menu======= */}
        <div className="block  sm:hidden z-10" onClick={handleNav}>
          {/* aca de avcuerdo a si esta abierto o cerrado el drawer se ve un icono o otro */}

          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/*  mobile menu*/}

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="">
            <li className=" ">
              <Link href="/" className="p-4  text-4xl hover:text-gray-500">
                Home
              </Link>
            </li>

            <li className="m-4">
              <Link
                href="/#about"
                className="p-4  text-4xl  hover:text-gray-500"
              >
                Acerca de Nosotros
              </Link>
            </li>
            <li className="m-4">
              <Link href="/store" className="p-4  text-4xl hover:text-gray-500">
                Tienda
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="p-4  text-4xl  hover:text-gray-500"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* FIN de mobile button */}
      </div>
    </div>
  );
}

export default NavBar;

/* 

TODO:  Puntos de interrupcion en px

sm: Aplica a pantallas con dimensiones de 640 px para arriba.
md: Para pantallas con dimensiones de 768 px en adelante.
lg: Aplica a pantallas grandes, que comienzan en 1024 px.
xl: Son para las pantallas muy grandes, que comienzan en 1280 px.
*/
