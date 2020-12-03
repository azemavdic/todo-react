import React from "react";

const Todo = ({ todos, setTodos, todo }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={completeTodoHandler}>
        <i className="fas fa-check"></i>{" "}
      </button>
      <button className="trash-btn" onClick={deleteTodoHandler}>
        <i className="fas fa-trash"></i>{" "}
      </button>
    </div>
  );
};

export default Todo;
