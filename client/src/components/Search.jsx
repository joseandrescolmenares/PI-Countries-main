import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getName } from "../actions/actions";
import style from "./css/Search.module.css"
export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  console.log(name);
  const handleSearch = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };

  const handleOnclick = (e) => {
    e.preventDefault();
    dispatch(getName(name));
  };

  return (
    <form>
      <input
      className={style.Search}
        type="search"
        placeholder="Search....."
        value={name}
        onChange={(e) => handleSearch(e)}
      />
      <button className={style.buscar} onClick={(e) => handleOnclick(e)}>Buscar</button>
    </form>
  );
}
