"use  client";
import React, { useEffect } from "react";
import Link from "next/link";
import SearchBar from "../searchBar/pages";
import { useRouter } from "next/navigation";
import { GrUpdate } from "react-icons/gr";
function NavBar({ onSelectUser }) {
  const router = useRouter();
  const handleReload = () => {
    window.location.reload(); // Esta línea recarga la página
  };

  return (
    <>
      <nav className="bg-sky-900 flex justify-between  xl:flex  items-center py-4 px-8 ">
        {/*  className="bg-orange-500 rounded p-2 " */}
        <Link href="/" className="text-white text-lg font-semibold">
          <p onClick={() => router.push("/")}>Api REQ-REST</p>
        </Link>

        <button
          onClick={handleReload}
          className="text-white text-lg font-semibold  flex justify-between"
        >
          <GrUpdate /> {/* Aquí utilizamos el icono FiUpload */}
        </button>

        <div className="flex xl:flex-nowrap  items-center">
          <SearchBar onSelectUser={onSelectUser} />

          <div className="ml-4 text-orange-500 font-semibold">
            <Link href={`/component/about`}>About</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
