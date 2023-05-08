import { useState } from 'react';
import TodoList from './elements/Todolist.js';
import AddTodo from './elements/AddTodo.js';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = { id: crypto.randomUUID(), done: false, edit: false, content };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <div>
        <h1>Liste de tâches</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;