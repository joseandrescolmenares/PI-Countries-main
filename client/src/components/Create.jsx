import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, Post } from "../actions/actions";
import Validate from "./Validate";

export default function Create() {
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const Ollcountrys = useSelector((state) => state.allCountrys);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countrys: [],
  });
  console.log(input);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const handleOnchange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      Validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      countrys: [...input.countrys, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Post(input));
    alert("si actividad fue creada con exito!");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countrys: [],
    });
    navegate("/home");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleOnchange(e)}
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>
        <div>
          <label>Difficulty:</label>
          <select
            name="difficulty"
            value={input.difficulty}
            onChange={(e) => handleOnchange(e)}
          >
            <option value="1">1(Easy)</option>
            <option value="2">2(Light)</option>
            <option value="3">3(Mediun)</option>
            <option value="4">4(Hard)</option>
            <option value="5">5(Extreme)</option>
          </select>
          {error.difficulty && <p className="error">{error.difficulty}</p>}
        </div>
        <div>
          <label>Duration:</label>
          <select
            name="duration"
            value={input.duration}
            onChange={(e) => handleOnchange(e)}
          >
            <option value="1hr">1 Hr</option>
            <option value="2hr">2 Hr</option>
            <option value="3hr">3 Hr</option>
            <option value="4hr">4 Hr</option>
            <option value="5hr">5 Hr</option>
          </select>
          {error.duration && <p className="error">{error.duration}</p>}
        </div>
        <div>
          <label>Season:</label>
          <select
            name="season"
            value={input.season}
            onChange={(e) => handleOnchange(e)}
          >
            <option value="summer">summer</option>
            <option value="fall">fall</option>
            <option value="winter">winter</option>
            <option value="spring">spring</option>
          </select>
          {error.season && <p className="error">{error.season}</p>}
        </div>
        <div>
          <label>Countrys:</label>
          <select onChange={(e) => handleSelect(e)}>
            {Ollcountrys &&
              Ollcountrys.map((el) => <option value={el.id}>{el.name}</option>)}
          </select>
          <div>
            {" "}
            <button type="submit">Crear Activity</button>
          </div>
        </div>
      </form>
    </div>
  );
}
