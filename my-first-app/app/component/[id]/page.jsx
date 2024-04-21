"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchDataById } from "@/app/services";
import Image from "next/image";
export default function UserDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = await fetchDataById(parseInt(id));
        //console.log(result.data);
        setUser(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return !loading ? (
    <>
      <div
        className="flex flex-col justify-center justify-items-center mx-5 my-5  p-5 bg-gray-700 "
        key={user.id}
      >
        <h1 className="text-xl text-sky-400">
          {user.first_name} {user.last_name}
        </h1>

        <Image
          src={user.avatar}
          width={250}
          height={250}
          alt="picture of the author"
          quality={80}
        />

        <h5 className="text-rose-600 ">{user.email}</h5>
      </div>
    </>
  ) : (
    <h1 className="text-xl">CARGANDO .... ESPERE </h1>
  );
}
