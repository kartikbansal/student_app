

//ADD STUDENT
export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    payload: {
      ...student
    }
  };
};

//REMOVE STUDENT
export const removeStudent = id => {
  return {
    type: "REMOVE_STUDENT",
    payload: id
  };
};

//EDIT STUDENT NAME
export const editStudentName = (updates) => {
  return {
    type: "EDIT_STUDENT_NAME",
    payload: {
      ...updates
    }
  };
};

//EDIT STUDENT SCORE
export const editStudentScore = (updates) => {
  return {
    type: "EDIT_STUDENT_SCORE",
    payload: {
      ...updates
    }
  };
};