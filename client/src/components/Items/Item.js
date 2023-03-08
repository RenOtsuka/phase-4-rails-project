import React, {useState} from "react";
import EditItem from "./EditItem";

function Item({id, name, quantity, category_id, user_id, onDeleteItem, onEditItem}){

  const [editToggle, setEditToggle] = useState(false);

  function deleteItem(){
    fetch(`/items/${id}`, {
        method: "DELETE",
    });
    onDeleteItem(id);
  }

  function handleEditItem(editedItem){
    onEditItem(editedItem);
    setEditToggle(false);
  }   

  function toggle(){
    setEditToggle((editToggle) => !editToggle)
  }

  return(
    <div className="item">
      {editToggle ? (
        <EditItem 
          id={id} 
          name={name}
          quantity={quantity}
          category_id ={category_id}
          user_id ={user_id}
          editItem={handleEditItem}/>
      ) : (
          <div className="body">
              <p>{name} x {quantity}</p>
              {/* <br/> */}
              <button className="editButton" onClick={toggle}>Edit</button>
              <button className="deleteButton" onClick={deleteItem}>Delete</button>
              <hr/>
          </div>   
      )}
    </div>
  )

}

export default Item;