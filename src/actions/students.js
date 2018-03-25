import uuid from "uuid";
import { titleCase } from '../utils/helpers.js';

//ADD STUDENT
export const addStudent = (name, score) => {
  name = titleCase(name);
  return {
    type: "ADD_STUDENT",
    student: {
      id: uuid(),
      name,
      score
    }
  };
};

//REMOVE STUDENT
export const removeStudent = id => {
  return {
    type: "REMOVE_STUDENT",
    id
  };
};

//EDIT STUDENT NAME
export const editStudentName = (id, name) => {
  name = titleCase(name);
  return {
    type: "EDIT_STUDENT_NAME",
    id,
    name
  };
};

//EDIT STUDENT SCORE
export const editStudentScore = (id, score) => {
  return {
    type: "EDIT_STUDENT_SCORE",
    id,
    score
  };
};