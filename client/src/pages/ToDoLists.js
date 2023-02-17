import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

function ToDoLists(){
  const[toDoLists, SetToDoLists] = useState([]);

  useEffect(() => {
    fetch("/todolists")
    .then(r => r.json())
    .then(data => SetToDoLists(data))
  },[])
  
  return(
    <>
      {toDoLists.length > 0 ? (
        toDoLists.map(list =>(
          <ul className={list.title} key={list.id}>
             <h3>{list.title}</h3>
            <ItemList list={list}/>
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