const stateInitial = {
  allCountrys: [],
  countryCopia: [],
  filter: [],
  loanding: false,
  Activitys: [],
};



function rootReducer(state = stateInitial, action) {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...state,
        filter: action.payload,
        allCountrys: action.payload,
        countryCopia: action.payload,
        loanding: false,
      };
    case "GET_NAME":
      const name = action.payload
      return {
        ...state,
        allCountrys: name
      };

    case "GET_ID":
      return {
        ...state,
        countryCopia: action.payload,
      };
    case "POST":
      return {
        ...state,
      };

    case "FILTER_CONT":
      const estado = state.countryCopia;
      const nuevoestado = estado.filter((el) =>
        el.continent.includes(action.payload)
      );

      return {
        ...state,
       allCountrys:
          action.payload === "All" ? state.countryCopia : nuevoestado,
      };

    case "ACTIVITY":
      const activity = state.filter;
      const filterActivity = activity.filter((el) =>
        el.Activitys.map((el) => el.name).includes(action.payload)
      );

      return {
        ...state,
        allCountrys:
          action.payload === "All" ? state.countryCopia : filterActivity,
      };
     

    case "LOANDING":
      return {
        ...state,
        loanding: true,
      };

    case "FILTER":
      let aux =
        action.payload === "asc"
          ? state.countryCopia.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
              return 0;
            })
          : state.countryCopia.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
              return 0;
            });

      return {
        ...state,
        allCountrys: aux,
      };
    case "POPU":
      let orden =
        action.payload === "mayor"
          ? state.countryCopia.sort((a, b) => {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countryCopia.sort((a, b) => {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allCountrys: orden,
      };

    default:
      return state;
  }
}

export default rootReducer;
