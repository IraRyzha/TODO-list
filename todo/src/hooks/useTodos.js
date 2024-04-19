import { useContext } from "react";
import { TodosContext } from "../hoc/TodosProvider";

const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    console.error("Use TodosContext inside TodosProvider");
  } else {
    return context;
  }
};

export default useTodos;
