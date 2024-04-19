import { createContext, useReducer } from "react";
import initialState from "../state/state";
import todosReducer from "../state/todosReducer";

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
