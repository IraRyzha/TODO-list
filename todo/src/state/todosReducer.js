const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      break;

    default:
      break;
  }
};

export default todosReducer;
