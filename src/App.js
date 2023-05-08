import "./styles.css";
import Addtodo from "./elements/Addtodo.js";
import Todolist from "./elements/Todolist.js";

export default function App() {
  return (
    <div className="App">
      <Addtodo />
      <Todolist />
    </div>
  );
}
