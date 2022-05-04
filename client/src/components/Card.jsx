import React from "react";
import style from "./css/Card.module.css";

const Card = ({ name, flag, continent }) => {
  return (
    <div className={style.card}>
      <div>
        <img className={style.flag} src={flag} alt="bandera" />
      </div>
      <div>
        <h2>{continent}</h2>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Card;
