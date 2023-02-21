import { useState } from "react";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import NewItem from "../components/Items/NewItem";

function ToDoLists({toDoLists, itemList, SetItemList, categoryList, onDeleteItem, onEditItem}){
  const [addItemToggle, SetAddItemToggle] = useState(false);

  function onDeleteItem(id){
    const newList = itemList.filter((item) => item.id !== id);
    SetItemList(newList);
  } 

  function onEditItem(editedItemObj){
    const updateList = itemList.map( (item) => {
        if(item.id === editedItemObj.id){
            return editedItemObj;
        }
        else {
            return item;
        }
    });
    SetItemList(updateList);
  }

  function addItem(itemObj){
    SetItemList([...itemList, itemObj]);
  }

  function addItemToggle(){
    SetAddItemToggle((addItemToggle) => !addItemToggle);
}

  return(
    <>
      {toDoLists.length > 0 ? (
        toDoLists.map(list =>(
          <ul className={list.title} key={list.id}>
            <h3>{list.title}</h3>
            
            <br/>
            <button onClick={addItemToggle}>Add an Item</button>
            {addItemToggle ? (<NewItem addItem={addItem} categoryList={categoryList}/>): (null)}
            <ItemList itemList={itemList} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
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