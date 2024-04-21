const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log("adding");
      console.log(state);
      console.log(action);
      return {
        ...state,
        todos: [...state.todos, action.task],
      };
      break;
    case "CHECK":
      console.log("checking");
      console.log(state);
      console.log(action);
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
    case "RENAME":
      console.log("renaming");
      console.log(state);
      console.log(action);
      return {
        ...state,
        todos: [
          ...state.todos.map((task) =>
            task.id === action.renamedId
              ? { ...task, text: action.newText }
              : task
          ),
        ],
      };
      break;
      return {
        ...state,
      };
    case "DELETE":
      console.log("deleting");
      console.log(state);
      console.log(action);
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
