import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getData,
  filterCont,
  filter,
  activity,
  popular,
} from "../actions/actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import Search from "./Search";
import style from "./css/Home.module.css";
import logo from "./img/modii.jpg";


export default function Home() {
  const [popu, setPopu] = useState("");
  const [orden, setOrden] = useState("");
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(0);
  const Allcountrys = useSelector((state) => state.allCountrys);
  const loading = useSelector((state) => state.loanding);
  const dispatch = useDispatch();

  const handlePrev = () => {
    setOffset(offset - 9);
    setLimit(limit - 9);
  };

  const handleNext = () => {
    setOffset(offset + 9);
    setLimit(limit + 9);
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
      setOffset(0)
    setLimit(9)
  },[Allcountrys])

  const handleOnchange = (e) => {
    dispatch(filterCont(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filter(orden));
    setOrden(e.target.value);
  };

  const handleActivity = (e) => {
    dispatch(activity(e.target.value));
  };

  const handlePopup = (e) => {
    dispatch(popular(popu));
    setPopu(e.target.value);
  };

  return (
    <div>
      {loading ? (
        <div>cargando</div>
      ) : (
        <div className={style.background}>
          <div>
            <div className={style.nav}>
              <Search />
              <div>
                <label>Continet: </label>
                <select className={style.select} onChange={(e) => handleOnchange(e)}>
                  <option value="All">All</option>
                  <option value="Africa">Africa</option>
                  <option value="Europe">Europa</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Asia">Asia</option>
                  <option value="North America">North America</option>
                  <option value="South America">South Americ</option>
                </select>
              </div>
              <div>
                <label>Ordenado: </label>
                <select  className={style.select} value={orden} onChange={(e) => handleFilter(e)}>
                  <option value="asc">Z-A</option>
                  <option value="des">A-Z</option>
                </select>
              </div>
              <div>
                <label>Popular: </label>
                <select className={style.select} onChange={handlePopup}>
                  <option value="mayor">mayor Population</option>
                  <option value="menor">menor Population</option>
                </select>
              </div>
              <div>
                <label>Activity: </label>
                <select className={style.select} onChange={(e) => handleActivity(e)}>
                  <option value="All">All</option>
                  <option value="Horse Ride">Horse Ride</option>
                  <option value="Bungee jumping">Bungee jumping</option>
                  <option value="Visit Tourist places">
                    Visit Tourist place
                  </option>
                  <option value="ski">ski</option>
                  <option value="Hot Air Ballon Ride">
                    Hot Air Ballon Ride
                  </option>
                </select>
              </div>
              <Link to="/home/create">
               <button className={style.crear}>Crear Actividad</button>
              </Link>
             

            </div>
            <div className={style.botones}>
           
              <button className={style.atras} disabled={offset <= 0} onClick={handlePrev}>
              ???
              </button>
              <button disabled={limit >= (Allcountrys.length -1)} onClick={handleNext}>
              ??? 
              </button>
            </div>

            <img className={style.mundo} src={logo} alt="mundo" />

            <div className={style.centrar}>
              {Allcountrys &&
                Allcountrys.slice(offset, limit).map((el) => {
                  return (
                    <Link className={style.link} to={`/home/${el.id}`}>
                      <Card
                        key={el.id}
                        name={el.name}
                        flag={el.flag}
                        continent={el.continent}
                      />
                     
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
