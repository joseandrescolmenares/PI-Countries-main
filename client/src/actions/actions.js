import axios from "axios";

export function getData() {
  return async function (dispatch) {
    try {
      let result = await axios.get("http://localhost:3001/countrys");
      console.log(result.data);
      return dispatch({
        type: "GET_INFO",
        payload: result.data,
      })
     
    } catch (error) {
      console.log(error);
    }
  };
  
}

export function getName(name) {
  return async function (dispatch) {
    try {
      let data = await axios.get(`http://localhost:3001/countrys?name=${name}`);
      return dispatch({
        type: "GET_NAME",
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getId(id) {
  return async function (dispatch) {
    try {
      let detail = await axios.get(`http://localhost:3001/countrys/${id}`);
      console.log(detail.data);
      return dispatch({
        type: "GET_ID",
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function filterCont(payload){
  return{
    type: 'FILTER_CONT',
    payload: payload
  }

}


export function filter(payload){
    return{
        type: 'FILTER',
        payload: payload
    }
}

export function activity(payload){
  console.log(payload)
  return{
    type: 'ACTIVITY',
    payload: payload
  }
}



