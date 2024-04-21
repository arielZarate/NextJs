import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center text-yellow-400">
        REQREST
      </h1>

      <header className="text-3xl font-bold mb-4">
        Una REST-API alojada lista para responder a sus solicitudes AJAX.
      </header>

      <section className="text-xl  flex flex-col justify-center content-center  my-10">
        <article className="text-cyan-300">
          Datos falsos No más tediosa creación de datos de muestra, lo tenemos
          cubierto.
        </article>

        <article className="text-rose-300">
          Respuestas reales Desarrolla con códigos de respuesta reales. OBTENER,
          PUBLICAR, PONER Y ELIMINAR admitidos.
        </article>
        <article className="text-orange-300">
          Siempre activo Acceso gratuito 24 horas al día, 7 días a la semana en
          tus fases de desarrollo. Vuélvete loco.
        </article>
      </section>

      <Link className="flex text-center" href="/">
        <button className="bg-slate-600 rounded-lg p-5">TO BACK</button>
      </Link>
    </div>
  );
}

export default About;
