import React from "react";
import { useState } from "react";
import "./App.css";
import TodoLists from "./ToDoLists";

function App() {
  const [inputData, newData] = useState("");
  const listData = (e) => {
    newData(e.target.value);
  };
  const [button, setbutton] = useState([]);
  const buttonClicked = () => {
    if (inputData === "") {
      alert("please fill data!!");
    } else {
      setbutton((e) => {
        return [...e, inputData];
      });
    }
    newData("");
  };
  const deleteList = (id) =>{
    console.log("deleted")
    setbutton((e)=>{
      return e.filter((arrElem,index)=>{
        return index !== id;
      })
    })

    
  }
  return (
    <>
      <div className="main">
        <br />
        <div className="todo-headline">
          <p className="todo-headline-text">TODO LIST</p>
        </div>
        <div className="todo-body">
          <input
            type="text"
            placeholder="Add a text"
            value={inputData}
            onChange={listData}
          />
          <button className="todo-body-button" onClick={buttonClicked}>
            +
          </button>
        </div>
        <br />
        <ol>
          {button.map((e,index) => {
            return <TodoLists 
            text={e}
            onSelect={deleteList}
            key={index}
            id={index}
             />;
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
