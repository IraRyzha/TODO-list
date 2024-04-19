import { useState } from "react";
import useTodos from "../../hooks/useTodos";
import "./AddTodo.scss";

const AddTodo = () => {
  const { dispatch } = useTodos();
  const [inputText, setInputText] = useState("");
  const [taskId, setTaskId] = useState(0);

  const handleAdd = (event) => {
    if (event.key === "Enter" && inputText !== "") {
      dispatch({
        type: "ADD",
        task: { id: taskId, text: inputText, isChecked: false },
      });
      setInputText("");
      setTaskId(taskId + 1);
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyUp={(e) => handleAdd(e)}
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export { AddTodo };
