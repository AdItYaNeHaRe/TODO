// Todoitems.jsx
// eslint-disable-next-line no-unused-vars
// Todoitems.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
// Todoitems.jsx
import PropTypes from "prop-types";
import Todoitem from "./Todoitem";

const Todoitems = ({ todoitems, onDelete, onEdit, onStatusChange }) => {
  return (
    <div>
      {todoitems.map((item, index) => (
        <Todoitem
          key={index}
          todoname={item.name}
          tododate={item.date}
          todopriority={item.priority}
          todostatus={item.status}
          onDelete={() => onDelete(item.name)}
          onEdit={() => onEdit(item)}
          onStatusChange={() => onStatusChange(item.name)}
        />
      ))}
    </div>
  );
};

Todoitems.propTypes = {
  todoitems: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default Todoitems;
