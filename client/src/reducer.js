const defaultState = {
  pictures: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_PICTURES":
      return {pictures: [...action.data.map(elem => ([elem.src, elem.src]))]};
      //return state
    case "POST_PICTURE":
      console.log('Uploaded', action.data)
      return {pictures: [...state.pictures, action.data]};
    default: 
      return state;
  }
}

export default reducer