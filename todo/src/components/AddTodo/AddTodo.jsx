import { useState } from "react";
import useTodos from "../../hooks/useTodos";
import "./AddTodo.scss";

const AddTodo = () => {
  const { state, dispatch } = useTodos();
  const [inputText, setInputText] = useState("s");
  //   console.log(state);
  //   console.log(dispatch);

  const handleAdd = (event) => {
    event.preventDefault();
    // console.log(event);
    if (event.key === "Enter" && inputText !== "") {
      dispatch({ type: "ADD", payload: inputText });
    }
  };

  return (
    <div className="add-todo">
      <form>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            console.log(e);
            setInputText(e.target.value);
          }}
          onKeyPress={(e) => handleAdd(e)}
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export { AddTodo };
