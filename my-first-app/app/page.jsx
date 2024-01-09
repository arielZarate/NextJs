"use client";

import CardUser from "./component/cardUser/page";
import { useEffect, useState } from "react";
import { fetchData, fetchDataById } from "./services";
import NavBar from "./component/navbar/page";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null); // Estado para almacenar el ID seleccionado

  const handleSelectUser = (id) => {
    setUserId(id);
    const detailUrl = `/detail/${id}`; // Simulación de URL con '/detail/:id'
    window.history.pushState({}, null, detailUrl); // Cambia la URL en el navegador
  };
  // TODO: useEffect API DE GET NOTICES
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        // console.log(userId);

        if (userId) {
          console.log(userId);
          const apiData = await fetchDataById(parseInt(userId));

          setData([apiData.data]);
        } else {
          //console.log("cargado datos \n");
          const apiData = await fetchData();
          // console.log(apiData.data);
          setData(apiData.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [userId]);

  //TODO: useEffect y settimeout para demorar el punto de arranque
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <NavBar onSelectUser={handleSelectUser} />
      {!loading ? (
        <>
          {data.map((u) => {
            return (
              <div key={u.id}>
                <CardUser user={u} />
              </div>
            );
          })}
        </>
      ) : (
        <h1 className="text-xl">CARGANDO .... ESPERE </h1>
      )}
    </>
  );
}
