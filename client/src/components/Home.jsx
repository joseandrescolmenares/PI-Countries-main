import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../actions/actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import Search from "./Search"

export default function Home() {
  const Allcountrys = useSelector((state) => state.allCountrys);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  },[dispatch]);

  return (
    <div>
        <Search/>
 <div>
   <div>
     <select>
     <option value="Africa">Africa</option>
     <option value="Europa">Europa</option>
     <option value="Oceania">Oceania</option>
     <option value="Asia">Asia</option>
     <option value="North America">North America</option>
     <option value="South America">South Americ</option>
     </select>
   </div>
   <div>
     <select >
      <option value="orPo">ascendente Poblacion</option>
      <option value="dePo">descendente poblacion</option>
      <option value="asc">A-Z</option>
      <option value="des">Z-A</option>
     </select>
   </div>
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
  );
}
