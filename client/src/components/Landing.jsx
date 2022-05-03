import React from "react";
import { Link } from "react-router-dom";
import style from "./css/Landing.module.css";

const Landing = () => {
  return (
    <div className={style.background}>
      <div className={style.conten}>
        <h1> comenzo el juego</h1>
        <Link to="home">
          <button>comenzar</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
