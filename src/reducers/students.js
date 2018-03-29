const defaultStudentsState = [];

const studentsReducer = (state = defaultStudentsState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [action.payload, ...state];
    case "REMOVE_STUDENT":
      return state.filter(student => student.id !== action.payload);
    case "EDIT_STUDENT_NAME":
      return state.map(student => {
        if (student.id !== action.payload.id) return student;
        return {
          ...student,
          fullName: action.payload.fullName
        };
      });
    case "EDIT_STUDENT_SCORE":
      return state.map(student => {
        if (student.id !== action.payload.id) return student;
        return {
          ...student,
          score: action.payload.score
        };
      });
    default:
      return state;
  }
};

export default studentsReducer;