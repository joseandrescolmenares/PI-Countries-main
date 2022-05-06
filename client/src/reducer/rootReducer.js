const stateInitial = {
  allCountrys: [],
  countryCopia: [],
  filter: [],
};

console.log(stateInitial.allCountrys);

function rootReducer(state = stateInitial, action) {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...state,
        filter: action.payload,
        allCountrys: action.payload,
        countryCopia: action.payload,
      };
    case "GET_NAME":
      return {
        ...state,
        allCountrys: action.payload,
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
      const estado = state.filter;
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

    case "FILTER":
      let aux =
        action.payload === "asc"
          ? state.countryCopia.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.countryCopia.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });

      return {
        ...state,
        allCountrys: aux,
      };

    default:
      return state;
  }
}

export default rootReducer;
