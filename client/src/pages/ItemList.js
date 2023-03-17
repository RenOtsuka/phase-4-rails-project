import React, {useState} from "react";
import { Link } from "react-router-dom";
import Item from "../components/Items/Item";

function ItemList({ itemList, onEditItem, onDeleteItem}){


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
            onEditItem={onEditItem}
            onDeleteItem={onDeleteItem}
          /> 
          )
        )
      ):(
        <>
        <h2>No Items Found</h2>
        </>
      )}
    </>
  )
}

export default ItemList;