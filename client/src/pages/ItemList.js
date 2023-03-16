import React, {useState} from "react";
import { Link } from "react-router-dom";
import Item from "../components/Items/Item";
import Navbar from "../components/Navbar";

function ItemList({user, setUser, itemList, onEditItem, onDeleteItem}){

  // const[itemList, SetItemList] = useState(user.items);
  
  // function onDeleteItem(id){
  //   const newList = itemList.filter((item) => item.id !== id);
  //   SetItemList(newList);
  // } 

  // function onEditItem(editedItemObj){
  //   const updateList = itemList.map( (item) => {
  //       if(item.id === editedItemObj.id){
  //           return editedItemObj;
  //       }
  //       else {
  //           return item;
  //       }
  //   });
  //   SetItemList(updateList);
  // }


  return (
    <>
    {/* <Navbar user={user} setUser={setUser}/> */}
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