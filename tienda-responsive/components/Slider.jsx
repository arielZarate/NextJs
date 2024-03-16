"use client";

import Image from "next/image";
import React, { useState } from "react";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { SliderData2, SliderData } from "./SliderData";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="about" className="max-w-[1240px] mx-auto ">
      <h1 className="text-2xl font-bold text-start p-4 ">Quienes Somos</h1>

      <p className="text-lg pb-2 px-4 text-slate-900">
        Somos una empresa familiar apasionada por la moda informal unisex. En
        los últimos 5 años, hemos experimentado un emocionante crecimiento,
        compartiendo nuestro amor por la ropa cómoda y con estilo. Nuestra
        dedicación a la calidad y la autenticidad nos impulsa a ofrecer prendas
        que reflejan la esencia de quienes somos y lo que representamos.
        ¡Bienvenido a nuestra historia de moda y conexión!
      </p>

      <div className="relative flex justify-center p-4 ">
        {SliderData2.map((slide, index) => {
          //===defino una variable de css =========
          const isCurrent = index === current;
          const opacityClass = isCurrent
            ? "opacity-[1] ease-in duration-1000"
            : "opacity-0";
          //===================
          return (
            <div key={index} className={opacityClass}>
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[30%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width={1440}
                  height={600}
                  objectFit="cover"
                  className=" w-full h-[80%] "
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[30%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
