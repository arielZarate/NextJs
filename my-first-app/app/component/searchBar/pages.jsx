import { fetchDataById } from "@/app/services";
import React, { useState, useEffect } from "react";

function SearchBar({ onSelectUser }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;
    // console.log(input);
    setId(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el envío por defecto del formulario
    if (id.trim() !== "") {
      // console.log(id);
      onSelectUser(id);
      setId("");

      // Comprobación básica para asegurar que el ID no esté vacío
      //  onSelectUser(id); // Llama a la función onSelectUser que pasa el ID al componente Home
    } else {
      alert("debe ingresar un id ");
    }
  };

  return (
    <div className=" flex  items-center  xl:w-1 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={handleChange}
          className="rounded-md text-gray-900"
        />
        <button type="submit" className="bg-orange-700 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
