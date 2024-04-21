import { createContext, useReducer } from "react";
import initialState from "../state/state";
import todosReducer from "../state/todosReducer";

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTask = (taskId, inputText) => {
    return dispatch({
      type: "ADD",
      task: { id: taskId, text: inputText, isChecked: false },
    });
  };

  const checkTask = (checkedId) => {
    return dispatch({ type: "CHECK", checkedId });
  };

  const deleteTask = (deletedId) => {
    return dispatch({ type: "DELETE", deletedId });
  };

  const renameTask = (renamedId, newText) => {
    return dispatch({
      type: "RENAME",
      renamedId,
      newText,
    });
  };

  return (
    <TodosContext.Provider
      value={{ state, addTask, checkTask, deleteTask, renameTask }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
