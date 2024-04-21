import "./TodoList.scss";
import { useRef, createRef, useState, useEffect } from "react";
import useTodos from "../../hooks/useTodos";
import checkSvg from "../../images/icon-check.svg";
import renameSvg from "../../images/icon-rename.svg";
import deleteSvg from "../../images/icon-delete.svg";

const TodoList = () => {
  const { state, checkTask, deleteTask, renameTask } = useTodos();
  const [editedTaskId, setEditedTaskId] = useState();

  // const taskInputRefs = useRef({});
  // useEffect(() => {
  //   taskInputRefs.current = state.todos.reduce((accumulator, task) => {
  //     accumulator[task.id] = createRef();
  //     return accumulator;
  //   }, {});
  // }, [state.todos]);

  const handleRename = (taskId, newText) => {
    if (newText?.length > 0) {
      renameTask(taskId, newText);
    }
  };

  return (
    <div className="todo-list">
      {state.todos.length > 0 && (
        <ul>
          {state.todos.map((task) => {
            const isEditing = task.id === editedTaskId;
            return (
              <li key={task.id} className={task.isChecked ? "checked" : ""}>
                <button
                  className={task.isChecked ? "check-btn checked" : "check-btn"}
                  onClick={() => checkTask(task.id)}
                >
                  {task.isChecked && <img src={checkSvg} />}
                </button>
                <input
                  // ref={taskInputRefs.current[task.id]}
                  value={task.text}
                  onChange={(e) => {
                    handleRename(task.id, e.target.value);
                  }}
                  disabled={!isEditing}
                />
                <button
                  className="rename-btn"
                  onClick={() => {
                    setEditedTaskId(task.id);
                    // const inputRef = taskInputRefs.current[task.id];
                    // if (inputRef && inputRef.current) {
                    //   inputRef.current.disabled = false;
                    // }
                  }}
                >
                  <img src={renameSvg} />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  <img src={deleteSvg} />
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
