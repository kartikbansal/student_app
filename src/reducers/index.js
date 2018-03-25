import { combineReducers } from 'redux';
import studentsReducer from './students.js';

export default combineReducers({
  students: studentsReducer
});