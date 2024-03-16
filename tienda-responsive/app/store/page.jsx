import React from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
function Store() {
  return (
    <div>
      <Hero
        heading="Tienda de Productos"
        message=" Tienda Unisex uniformal"
        // textButton="Ir a Home"
        colorHeading="text-yellow-500"
      ></Hero>
    </div>
  );
}

export default Store;
