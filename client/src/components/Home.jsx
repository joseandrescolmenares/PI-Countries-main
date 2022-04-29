import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getData} from '../actions/actions'

export default function Home(){
const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getData())
    },[])

    return( 
    <div>
        HOLAA
     </div>
  )
}

