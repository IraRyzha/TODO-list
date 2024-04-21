import "./App.scss";
import mainBackground from "./images/bg-desktop-light.jpg";
import iconMoon from "./images/icon-moon.svg";
import { TodosProvider } from "./hoc/TodosProvider";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <TodosProvider>
      <section className="todo-list">
        <img
          src={mainBackground}
          alt="mainBackground"
          className="main-background"
        />
        <div className="container">
          <div className="logo">
            <h1>TODO</h1>
            <img src={iconMoon} alt="logo" className="logo" />
          </div>
          <AddTodo />
          <TodoList />
        </div>
      </section>
    </TodosProvider>
  );
}

export default App;
