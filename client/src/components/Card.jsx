import  React  from "react";
// import style from './css/Card.module.css'

const Card = ({name, flag, continent}) =>{
 return (
     <div>
         <h1>{name}</h1>
         <img src={flag} alt="bandera" />
         <h2>{continent}</h2>
     </div>
 )
}

export default Card;