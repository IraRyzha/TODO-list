import "./TodoList.scss";
import useTodos from "../../hooks/useTodos";
import checkSvg from "../../images/icon-check.svg";
import crossSvg from "../../images/icon-cross.svg";

const TodoList = () => {
  const { state, dispatch } = useTodos();

  const handleCheck = (checkedId) => {
    dispatch({ type: "CHECK", checkedId });
  };

  const handleDelete = (deletedId) => {
    dispatch({ type: "DELETE", deletedId });
  };

  return (
    <div className="todo-list">
      {state.todos.length > 0 && (
        <ul>
          {state.todos.map((task) => {
            return (
              <li key={task.id} className={task.isChecked ? "checked" : ""}>
                <button
                  className={task.isChecked ? "check-btn checked" : "check-btn"}
                  onClick={() => handleCheck(task.id)}
                >
                  {task.isChecked && <img src={checkSvg} />}
                </button>
                {task.text}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task.id)}
                >
                  <img src={crossSvg} />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { TodoList };
