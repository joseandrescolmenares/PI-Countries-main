import React from "react";
import { Link } from "react-router-dom";
import style from "./css/Landing.module.css";

const Landing = () => {
  return (
    <div className={style.background}>
      <div className={style.conten}>
        <h1 className={style.titulo}>BIENVENIDOS A MI APP</h1>
        <Link to="home">
          <button className={style.comenzar}>comenzar</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
