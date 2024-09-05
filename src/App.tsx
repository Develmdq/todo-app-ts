import { useState } from "react";
import Todos from "./components/Todos";
import "./app.css";

const mockTodos = [
  { id: 1, title: "todo1", completed: true },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: false },
];
const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [dark, setDark] = useState(false)

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: number, completed: boolean) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    setTodos(newTodos);
  };


  return (
    <>
      <header>
        <h1 className="h1">Todo mvc-app</h1>
        <label className="switchBtn">
          <input
            type="checkbox"
            onChange={(e) => e.target.checked && setDark(!dark)}
          />
          <div className="slide round"></div>
        </label>
      </header>
      <div className="todoapp">
        <Todos
          todos={todos}
          handleRemove={handleRemove}
          handleCompleted={handleCompleted}
        />
      </div>
    </>
  );
};

export default App;
