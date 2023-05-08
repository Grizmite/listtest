import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    onAddTodo && onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input placeholder="Write something" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AddTodo;
