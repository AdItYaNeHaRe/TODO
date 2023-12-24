// AddTodo.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddTodo({ onAddTodo, onDeleteTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoPriority, setTodoPriority] = useState("Low");
  const [todoCategory, setTodoCategory] = useState("");

  const handleAddTodo = () => {
    if (todoName && todoDate && todoPriority && todoCategory) {
      const newTodo = {
        name: todoName,
        date: todoDate,
        priority: todoPriority,
        category: todoCategory,
        status: "Incomplete",
      };
      onAddTodo(newTodo);
      setTodoName("");
      setTodoDate("");
      setTodoPriority("Low");
      setTodoCategory("");
    } else {
      console.error("All fields are required");
    }
  };

  const handleDeleteTodo = () => {
    if (onDeleteTodo) {
      onDeleteTodo();
      setTodoName("");
      setTodoDate("");
      setTodoPriority("Low");
      setTodoCategory("");
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col">
          <input
            type="text"
            placeholder="Enter TODO Here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Enter TODO Priority"
            value={todoPriority}
            onChange={(e) => setTodoPriority(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Enter TODO Category"
            value={todoCategory}
            onChange={(e) => setTodoCategory(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-outline-success kg-button-add"
            onClick={handleAddTodo}
          >
            ADD
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDeleteTodo}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
