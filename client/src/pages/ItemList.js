import React from "react";
import { Link } from "react-router-dom";
import Item from "../components/Items/Item";

function ItemList({itemList, SetItemList}){

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

  return (
    <>
      <h1>Items</h1>
      <Link to="/new">
        <button>Add an Item</button>
      </Link>
      <br/> 
      {itemList.length > 0 ? (
        itemList.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            category_id = {item.category_id}
            user_id = {item.user_id}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
          /> 
          )
        )
      ):(
        <>
        <h2>No Items Found</h2>
        {/* <Link to="/new">
          <button>Add an Item</button>
        </Link>  */}
        </>
      )}
    </>
  )
}

export default ItemList;