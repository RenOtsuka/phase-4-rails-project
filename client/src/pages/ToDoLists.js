import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

function ToDoLists({toDoLists}){

  function onDeleteItem(id){
    const newList = toDoLists.filter((item) => item.id !== id);
    SetToDoLists(newList);
  } 

  function onEditItem(editedItemObj){
    const updateList = toDoList.map( (item) => {
        if(item.id === editedItemObj.id){
            return editedItemObj;
        }
        else {
            return item;
        }
    });
    SetToDoLists(updateList);
  }

  return(
    <>
      {toDoLists.length > 0 ? (
        toDoLists.map(list =>(
          <ul className={list.title} key={list.id}>
             <h3>{list.title}</h3>
            <ItemList list={list} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
          </ul>
        ))
      ) : (
        <>
        <br/>
          <h2>No Lists Found</h2>
          <Link to="/new">
            <button>Create List</button>
          </Link>
        </>
      )}
    </>
  );

}


export default ToDoLists;