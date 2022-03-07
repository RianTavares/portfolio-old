const INITIAL_STATE = {
  lenguage: ""
}

function internationalization (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_LENGUAGE":
      return {
        ...state,
        lenguage: action.payload,
      }
  
    default:
      return state;
  }
}

export default internationalization;