const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.task],
      };
      break;
    case "CHECK":
      return {
        ...state,
        todos: [
          ...state.todos.map((task) =>
            task.id === action.checkedId
              ? { ...task, isChecked: !task.isChecked }
              : task
          ),
        ],
      };
      break;
    case "DELETE":
      return {
        ...state,
        todos: [...state.todos.filter((task) => task.id !== action.deletedId)],
      };
      break;
    default:
      return {
        ...state,
      };
      break;
  }
};

export default todosReducer;
