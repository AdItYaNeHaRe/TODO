// Todoitem.jsx
// Todoitem.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Todoitem({ todoname, tododate, todopriority, todostatus, onDelete, onEdit, onStatusChange }) {
  const handleDelete = () => {
    onDelete && onDelete(todoname);
  };

  const handleEdit = () => {
    onEdit && onEdit();
  };

  const handleStatusChange = () => {
    const newStatus = todostatus === "Incomplete" ? "Completed" : "Incomplete";
    onStatusChange && onStatusChange(todoname, newStatus);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col">{todoname}</div>
        <div className="col">{tododate}</div>
        <div className="col">{todopriority}</div>
        <div className="col">{todostatus}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-warning kg-button"
            onClick={handleEdit}
          >
            EDIT
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className={`btn ${todostatus === "Incomplete" ? "btn-success" : "btn-secondary"} kg-button`}
            onClick={handleStatusChange}
          >
            {todostatus === "Incomplete" ? "Mark Completed" : "Mark Incomplete"}
          </button>
        </div>
      </div>
    </div>
  );
}

Todoitem.propTypes = {
  todoname: PropTypes.string.isRequired,
  tododate: PropTypes.string.isRequired,
  todopriority: PropTypes.string.isRequired,
  todostatus: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onStatusChange: PropTypes.func,
};

export default Todoitem;
