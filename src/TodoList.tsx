import { useState } from "react";
import "./TodoList.css";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState([] as TodoItem[]);

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
      </div>
    </div>
  );
}

export default App;
