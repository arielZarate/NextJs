//FIXME: services de consumo de api externa

export const fetchData = async () => {
  try {
    const response = await fetch(`https://reqres.in/api/users`);
    const apiData = await response.json();
    return apiData;
  } catch (error) {
    console.error("Error al obtener datos de la API externa", error);
  }
};

export const fetchDataById = async (id) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const apiData = await response.json();

    return apiData;
  } catch (error) {
    console.error("Error al obtener datos de la API externa", error);
  }
};
