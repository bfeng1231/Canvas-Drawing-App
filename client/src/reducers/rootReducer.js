import { combineReducers } from 'redux';
import pictureReducer from './pictureReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  pictureReducer, authReducer, errorReducer
})