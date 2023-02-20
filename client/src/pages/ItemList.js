// import {useState } from "react";
import Item from "../components/Items/Item";

function ItemList({list, onDeleteItem, onEditItem}){
  const itemList = list.map( item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      quantity={item.quantity}
      onDeleteItem={onDeleteItem}
      onEditItem={onEditItem}
    />
  ))

  return (
    <ul className="itemList">{itemList}</ul>
  )
}

export default ItemList;