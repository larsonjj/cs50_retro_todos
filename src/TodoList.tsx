import { useState } from "react";
import "./TodoList.css";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: true },
  ] as TodoItem[]);

  return (
    <div className="todoList">
      <div className="todoListInnerBorder">
        <div className="inputWrapper">
          <input
            className="input"
            type="text"
            placeholder="What needs to be done?"
          />
          <button className="addButton">+</button>
        </div>
        {todos.length > 0 && (
          <div className="listWrapper">
            <ul className="list">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={todo.done ? "listItem done" : "listItem"}
                >
                  <input type="checkbox" className="checkbox" />
                  <div className="text">{todo.text}</div>
                  <button className="deleteButton">x</button>
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
