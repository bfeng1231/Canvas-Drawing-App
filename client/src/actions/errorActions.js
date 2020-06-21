export const returnError = (msg, status) => {
  return {
    type: 'GET_ERROR',
    data: {msg, status}
  }
}

export const clearError = () => {
  return {
    type: 'CLEAR_ERROR'
  }
}