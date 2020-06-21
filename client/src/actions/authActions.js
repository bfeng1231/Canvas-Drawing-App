import { returnError } from './errorActions'

export const getToken = () => dispatch => {
  fetch('/api/user', {method: 'GET'})
    .then(res => res.json())
    .then(data => dispatch({type: 'GET_TOKEN', data}))
    .catch(err => {
      dispatch(returnError(err.res.data, err.res.status))
      dispatch({type: 'AUTH_FAIL'})
    })
}