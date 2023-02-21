// import {useState } from "react";
import Item from "../components/Items/Item";

function ItemList({itemList, onDeleteItem, onEditItem}){
  const itemsList = itemList.map( item => (
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
    <ul className="itemsList">{itemsList}</ul>
  )
}

export default ItemList;