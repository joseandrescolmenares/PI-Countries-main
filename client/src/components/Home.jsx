import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, filterCont, filter} from "../actions/actions";
import Card from "./Card";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Home() {
  const [orden, setOrden] = useState("");
  const [limit, setLimit] = useState(0);
  const [offset, setOffset] = useState(9);
  const Allcountrys = useSelector((state) => state.allCountrys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch,]);

  const handleOnchange = (e) => {
    dispatch(filterCont(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filter(orden));
    setOrden(e.target.value);
  };

  return (
    <div>
      <Search />
      <div>
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
        { Allcountrys &&
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
