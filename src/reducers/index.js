import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import studentsReducer from './students.js';

export default combineReducers({
  students: studentsReducer,
  form: formReducer
});