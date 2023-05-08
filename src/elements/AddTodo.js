import { useState } from 'react';

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && value.length) {
      addTodo(value);
      setValue('');
    }
  }

  function handleClick() {
    if (value.length) {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleClick}>
        Ajouter
      </button>
    </div>
  );
}