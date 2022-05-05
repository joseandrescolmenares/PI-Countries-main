import React from "react";
import style from "./css/Card.module.css";

const Card = ({ name, flag, continent }) => {
  return (
    <div className={style.card}>
      <img className={style.flag} src={flag} alt="bandera" />
      <div>
        <h2 className={style.bla}>{continent}</h2>
        <h1 className={style.bla}>{name}</h1>
      </div>
    </div>
  );
};

export default Card;
