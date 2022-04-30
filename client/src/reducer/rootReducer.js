const stateInitial = {
  allCountrys: [],
 countryCopia: []
};

console.log(stateInitial.allCountrys);

function rootReducer(state = stateInitial, action) {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...state,
        allCountrys: action.payload,
        countryCopia: action.payload
      };
    case "GET_NAME":
      return {
        ...state,
        allCountrys: action.payload,
        
      };

      case 'GET_ID':
        return {
          ...state,
          countryCopia:   action.payload
        }
    default:
      return state;
  }
}

export default rootReducer;
