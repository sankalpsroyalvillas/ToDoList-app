import React from "react";

const TodoLists = (props) => {
  return (
    <>
      <div className="todo-body-list-div">
        <button
          className="todo-body-list-button"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          +
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoLists;
