import React from "react";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

//TODO: componente smart
const contact = () => {
  return (
    <div>
      <Hero
        heading="Contacto"
        message="Envianos un mail y te contestaremos en la brevedad."
        colorHeading="text-yellow-500"
      />
      <Contact />
    </div>
  );
};

export default contact;
