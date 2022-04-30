import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {getName } from "../actions/actions"
export default function Search() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  console.log(name);
  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleOnclick = (e) =>{
      dispatch(getName(name))
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={name}
        onChange={(e) => handleSearch(e)}
      />
      <button onClick={(e) => handleOnclick(e)}>Buscar</button>
    </div>
  );
}
