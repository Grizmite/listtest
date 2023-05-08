import "./styles.css";
import AddTodo from "./elements/AddTodo.js";
import Todolist from "./elements/Todolist.js";

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todolist />
    </div>
  );
}
