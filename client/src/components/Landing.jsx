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
      {/* <div className={style.cloud}>
        <div className={style.light}></div>
        <img
          className={style.planeImg}
          src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png"
        />
      </div> */}
    </div>
  );
};

export default Landing;
