import React, { useState } from "react";
import Logo from "./Logo.tsx";
import "./App.css";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState([] as TodoItem[]);

  return (
    <div className="app">
      <Logo />
    </div>
  );
}

export default App;
