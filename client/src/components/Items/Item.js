import React from "react";

function Item({id, name, quantity}){

  const [editToggle, setEditToggle] = useState(false);

  function deleteItem(){
    fetch(`/items/${id}`, {
        method: "DELETE",
    });
    onDeleteItem(id);
  }

  function handleEditItem(editedItem){
    setEditToggle(false);
    onEditItem(editedItem);
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
          editItem={handleEditItem}/>
      ) : (
          <div className="body">
              <p>{name}</p>
              <p>{quantity}</p>
              <br/>
              <button className="editButton" onClick={toggle}>Edit</button>
              <button className="deleteButton" onClick={deleteItem}>Delete</button>
              <hr/>
          </div>   
      )}
    </div>
  )

}

export default Item;