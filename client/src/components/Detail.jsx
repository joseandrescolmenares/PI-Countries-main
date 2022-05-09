import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getId } from "../actions/actions";
import style from "./css//Detail.module.css"
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const Details = useSelector((state) => state.countryCopia);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getId(id));
  }, [dispatch, id]);

  return (
    <div className={style.background}> 
     <Link to='/home'><button className={style.regresa}>Regresar</button></Link>
    <div className={style.principal}>
      <img className={style.pais} src={Details[0].flag} alt="banderas" />
      <div> 
      <h1>Pais: {Details[0].name}</h1>
      <h2>Codigo: {Details[0].idName}</h2>
      <h2>Continente: {Details[0].continent}</h2>
      <h2>Capital: {Details[0].capital}</h2>
      <h2>{Details[0].subregion}</h2>
      <h1>{Details[0].area}</h1>
      <h2> nivel: {Details[0].population}</h2>
      <p>{Details[0].Activitys.map((el) => el.difficulty)}</p>
      <p>Actividad: {Details[0].Activitys.map((el) => el.name)}</p>
      </div>
    </div>
    </div>
  );
};

export default Detail;
