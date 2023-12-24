// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import EditTodo from "./components/EditTodo";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Go To Exam",
      date: "22/11/2023",
      priority: "High",
      category: "Study",
      status: "Incomplete",
    },
    {
      name: "Go To College",
      date: "01/01/2024",
      priority: "Medium",
      category: "Study",
      status: "Incomplete",
    },
    {
      name: "Go for work",
      date: "01/12/2023",
      priority: "Low",
      category: "Work",
      status: "Incomplete",
    },
  ]);

  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodoItems([...todoItems, newTodo]);
  };

  const deleteTodo = (todoName) => {
    setTodoItems(todoItems.filter((item) => item.name !== todoName));
  };

  const deleteLastTodo = () => {
    if (todoItems.length > 0) {
      const lastTodo = todoItems[todoItems.length - 1];
      deleteTodo(lastTodo.name);
    }
  };

  const editTodo = (todo) => {
    setEditingTodo(todo);
  };

  const cancelEdit = () => {
    setEditingTodo(null);
  };

  const saveEditedTodo = (editedTodo) => {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.name === editingTodo.name ? editedTodo : todo
      )
    );
    setEditingTodo(null);
  };

  const changeStatus = (todoName, newStatus) => {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.name === todoName ? { ...todo, status: newStatus } : todo
      )
    );
  };

  return (
    <div>
      <center>
        <h1>HELLO WELCOME </h1>
      </center>
      <br />
      <div className="Add-Todo">
        <center>
          <AppName />
        </center>
      </div>
      <br />
      <hr />
      <br />
      <div className="">
        <AddTodo onAddTodo={addTodo} onDeleteTodo={deleteLastTodo} />
      </div>
      <Todoitems
        todoitems={todoItems}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onStatusChange={changeStatus}
      />
      {editingTodo && (
        <EditTodo
          todo={editingTodo}
          onEditTodo={saveEditedTodo}
          onCancelEdit={cancelEdit}
        />
      )}
      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;

