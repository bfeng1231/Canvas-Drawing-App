const defaultState = {
  token: null,
  isAuth: null
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_TOKEN":
      //console.log(action.data.token)
      return {
        token: action.data.token,
        isAuth: true
      }
    case "AUTH_FAIL":
      return defaultState
    default: 
      return state;
  }
}

export default authReducer