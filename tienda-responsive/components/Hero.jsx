import React from "react";

/*FIXME: este componente recibe varios props 

# heading cabecera del h2
# message: titulo abajo del h2 
#textButton: nombre del boton
*/

function Hero({ heading, message, colorHeading }) {
  const defaultColor = "text-white"; // Color por defecto (puedes cambiarlo según tu preferencia)

  // Aplicar el colorHeading si se proporciona, de lo contrario, utilizar el color por defecto
  const h2Color = {
    color: colorHeading || defaultColor,
  };

  return (
    <div className="flex items-center justify-center h-screen mb-20 bg-fixed bg-center bg-cover custom-img ">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] flex items-center justify-center">
        <div className="p-5 text-white z-[2]  text-center">
          <h2 className={`text-5xl font-bold shadow-xl  ${h2Color.color}  `}>
            {heading}
          </h2>
          <p className="py-5 text-xl">{message}</p>
          {/*   <button type="button" className="px-8 py-2 border">
            {textButton}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
