import React, { useState } from "react";

const TodoInput = () => {
  const [todo, setTodo] = useState();
  const onChange = event => {
    setTodo(event.target.value);
  }
  const onSubmit = event => {
    event.preventDefault();
    if(todo.trim() === "") return;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
          />
      </div>
    </form>
  );
};

export default TodoInput;
