export const getPictures = () => (dispatch) => {
  fetch('/api/pictures', {method: 'GET'})
    .then(res => res.json())
    .then(data => dispatch({type: 'GET_PICTURES', data}))
    .catch(err => console.log(err))
}

export const postPicture = (url) => (dispatch) => {
  fetch('/api/pictures', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(url)
  })
    .then(res => res.json())
    .then(data => dispatch({type: 'POST_PICTURE', data}))
    .catch(err => console.log(err))
}