// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const EditTodo = ({ todo, onEdit, onCancel }) => {
  // eslint-disable-next-line react/prop-types
  const [editedName, setEditedName] = useState(todo.name);
  // eslint-disable-next-line react/prop-types
  const [editedDate, setEditedDate] = useState(todo.date);
  // eslint-disable-next-line react/prop-types
  const [editedPriority, setEditedPriority] = useState(todo.priority);
  // eslint-disable-next-line react/prop-types
  const [editedStatus, setEditedStatus] = useState(todo.status);

  const handleEditTodo = () => {
    const editedTodo = {
      name: editedName,
      date: editedDate,
      priority: editedPriority,
      status: editedStatus,
    };

    onEdit(editedTodo);
  };

  return (
    <div className="edit-todo-container">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={editedDate}
          onChange={(e) => setEditedDate(e.target.value)}
        />
      </div>
      <div>
        <label>Priority:</label>
        <select
          value={editedPriority}
          onChange={(e) => setEditedPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div>
        <label>Status:</label>
        <select
          value={editedStatus}
          onChange={(e) => setEditedStatus(e.target.value)}
        >
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <button onClick={handleEditTodo}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTodo;
