import React from "react";
import style from "./css/Card.module.css";

const Card = ({ name, flag, continent }) => {
  return (
    <div className={style.card}>
      
      <div className={style.text}>
      <img className={style.flag} src={flag} alt="bandera" />
        <h2 className={style.bla}>{continent}</h2>
        <p className={style.bla}>{name}</p>
      </div>
    </div>
  );
};

export default Card;
