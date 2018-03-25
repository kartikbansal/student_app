const defaultStudentsState = [];

const studentsReducer = (state = defaultStudentsState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [action.student, ...state];
    case "REMOVE_STUDENT":
      return state.filter(student => student.id !== action.id);
    case "EDIT_STUDENT_NAME":
      return state.map(student => {
        if (student.id !== action.id) return student;
        return {
          ...student,
          name: action.name
        };
      });
    case "EDIT_STUDENT_SCORE":
      return state.map(student => {
        if (student.id !== action.id) return student;
        return {
          ...student,
          score: action.score
        };
      });
    default:
      return state;
  }
};

export default studentsReducer;