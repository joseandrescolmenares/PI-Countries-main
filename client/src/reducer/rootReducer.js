const stateInitial = {
    allCountrys: []
}


console.log(stateInitial.allCountrys)

function rootReducer  (state = stateInitial, action){
 switch(action.type){
     case 'GET_INFO':
        
         return {
             ...state,
             allCountrys: action.payload
              
         }
        
         default:
            return state;
           
 }
}

export default rootReducer