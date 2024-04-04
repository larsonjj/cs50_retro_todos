import Logo from "./Logo.tsx";
import TodoList from "./TodoList.tsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Logo />
      </header>
      <main>
        <TodoList />
      </main>
      <footer className="footer">
        <p className="footerMessage">
          Made with <span className="heart">♥</span> by{" "}
          <a href="https://github.com/larsonjj" target="_blank">
            @larsonjj
          </a>
          <br />
          <span className="subMessage">CS50 course final project</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
