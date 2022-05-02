import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getId } from "../actions/actions";

const Detail = () => {
  const { id } = useParams();
  const Details = useSelector((state) => state.countryCopia);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getId(id));
  }, [dispatch, id]);
  
  return (
    <div>
      <p>{Details[0].name}</p>
      <img src={Details[0].flag} alt="banderas" />
      <h2>{Details[0].idName}</h2>
      <p>{Details[0].continent}</p>
      <h2>{Details[0].capital}</h2>
      <h2>{Details[0].subregion}</h2>
      <h1>{Details[0].area}</h1>
      <h2>{Details[0].population}</h2>
      <p>{Details[0].Activitys.map(el => el)}</p>
    </div>
  );
};

export default Detail;
