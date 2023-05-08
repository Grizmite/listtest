import "./styles.css";
import Addtodo from "/src/elements/Addtodo.js";
import Todolist from "/src/elements/Todolist.js";

export default function App() {
  return (
    <div className="App">
      <Addtodo />
      <Todolist />
    </div>
  );
}
