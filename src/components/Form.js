import React from "react";
import { nanoid } from "nanoid";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInputText("");
    setTodos([...todos, { id: nanoid(), text: inputText, completed: false }]);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Svi</option>
          <option value="completed">Završeni</option>
          <option value="uncompleted">Aktivni</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
