import axios from 'axios'

export function getData(){
    return  async function(dispatch){
        try{
        let result = await axios.get('http://localhost:3001/countrys')
        console.log(result.data)
        return dispatch({
            type: 'GET_INFO',
            payload: result.data
            
        })
      }catch(error){console.log(error)}
    }
}