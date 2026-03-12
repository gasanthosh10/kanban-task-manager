import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Kanban Task Manager</h1>
      <Board />
    </div>
  );
}

export default App;