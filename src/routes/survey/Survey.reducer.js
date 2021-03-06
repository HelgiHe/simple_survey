function reducer(state, action) {
  switch (action.type) {
    case 'ANSWER_CHANGED':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.value,
        },
      };
    case 'RESET':
      return { ...state, answers: {} };
    default:
      return state;
  }
}

export default reducer;
