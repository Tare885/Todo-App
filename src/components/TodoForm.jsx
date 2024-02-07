import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== "") {
      addTodo(value);
      setValue("");
    } else {
      alert("Type something!");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
