import {useState } from "react";
import Item from "../components/Items/Item";

function ItemList({list}){
  const itemList = list.map( item => (
    <Item
    key={item.id}
    id={item.id}
    name={item.name}
    quantity={item.quantity}
    />
  ))

  return (
    <ul className="itemList">{itemList}</ul>
  )
}

export default ItemList;