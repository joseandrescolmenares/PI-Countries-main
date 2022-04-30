import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getId } from "../actions/actions";

const Detail = () => {
  const { id } = useParams();
  const Details = useSelector((state) => state.countryCopia);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getId(id));
  }, [dispatch, id]);
  
  return (
    <div>
      <p>{Details[0].name}</p>
      <img src={Details[0].flag} alt="banderas" />
      <h2>{Details[0].idName}</h2>
      <p>{Details[0].continent}</p>
      <h2>{Details[0].capital}</h2>

    </div>
  );
};

export default Detail;
// Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// Código de país de 3 letras (id)
// Capital
// Subregión
// Área (Mostrarla en km2 o millones de km2)
// Población
// Actividades turísticas con toda su información asociada
