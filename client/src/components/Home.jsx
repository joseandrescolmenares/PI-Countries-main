import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, filterCont, filter, activity } from "../actions/actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import Search from "./Search";
import style from "./css/Home.module.css";
import logo from "./img/modii.jpg";

export default function Home() {
  const [orden, setOrden] = useState("");
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(9);
  const Allcountrys = useSelector((state) => state.allCountrys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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

  return (
    <div className={style.background}>
      <div>
     
        <div className={style.nav}>
        <Search />
          <div>
            <select onChange={(e) => handleOnchange(e)}>
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
            <select value={orden} onChange={(e) => handleFilter(e)}>
              <option value="ascPO">Ascendent Population</option>
              <option value="ascPO">Descendent Population</option>
              <option value="asc">Z-A</option>
              <option value="des">A-Z</option>
            </select>
          </div>
          <div>
            <select onChange={(e) => handleActivity(e)}>
              <option value="All">All</option>
              <option value="Horse Ride">Horse Ride</option>
              <option value="Bungee jumping">Bungee jumping</option>
              <option value="Visit Tourist places">Visit Tourist place</option>
              <option value="ski">ski</option>
              <option value="Hot Air Ballon Ride">Hot Air Ballon Ride</option>
            </select>
          </div>
        </div>
        <img className={style.mundo} src={logo} alt="mundo" />

        <div className={style.centrar}>
          {Allcountrys &&
            Allcountrys.map((el) => {
              return (
                <Link to={`/home/${el.id}`}>
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
  );
}
