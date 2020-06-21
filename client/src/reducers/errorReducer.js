const defaultState = {
  msg: {},
  status: null
}

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ERROR":
      console.log(action.data.msg, action.data.status)
      return {
        msg: action.data.msg,
        status: action.data.status
      }
    case "CLEAR_ERROR":
      return defaultState
    default: 
      return state;
  }
}

export default authReducer