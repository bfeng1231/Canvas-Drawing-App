export const getPictures = () => (dispatch) => {
  fetch('/api/pictures', {method: 'GET'})
    .then(res => res.json())
    .then(data => dispatch({type: 'GET_PICTURES', data}))
    .catch(err => console.log(err))
}

export const postPicture = (url, token) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (token) {
    config.headers['x-auth-token'] = token
    console.log(config)
  }

  fetch('/api/pictures', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    },
    body: JSON.stringify(url)
  })
    .then(res => res.json())
    .then(data => dispatch({type: 'POST_PICTURE', data}))
    .catch(err => console.log(err))
}