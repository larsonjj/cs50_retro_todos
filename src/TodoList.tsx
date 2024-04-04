import { useState } from "react";
import "./TodoList.css";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState([] as TodoItem[]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input") as HTMLInputElement;
    const text = input.value.trim();
    if (!text) return;
    setTodos([...todos, { id: todos.length + 1, text, done: false }]);
    input.value = "";
  };

  const handleCheckboxChange = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const handleDeleteClick = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoList">
      <div className="todoListInnerBorder">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <input
              className="input"
              type="text"
              placeholder="What needs to be done?"
            />
            <button className="addButton">+</button>
          </div>
        </form>
        {todos.length > 0 && (
          <div className="listWrapper">
            <ul className="list">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={todo.done ? "listItem done" : "listItem"}
                >
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={todo.done}
                    onChange={() => handleCheckboxChange(todo.id)}
                  />
                  <div className="text">{todo.text}</div>
                  <button
                    className="deleteButton"
                    onClick={() => handleDeleteClick(todo.id)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
