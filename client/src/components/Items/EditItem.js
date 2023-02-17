import React, { useState } from "react";

function EditItem({id, name, quantity, editItem}){

    const [editName, setEditName] = useState(name);
    const [editQuantity, setEditQuantity] = useState(0);

    function handleEdit(e){
        e.preventDefault();

        fetch(`items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                name: name,
                quantity: quantity
              }),
        })
        .then(r => r.json())
        .then(data => editItem(data))
        .catch(error => alert(error));

    }

    return(
        <form className="editItem" onSubmit={handleEdit}>
            <input 
              type="text" 
              id="itemName" 
              placeholder="Enter desciption..." 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />    
            <input 
              type="text" 
              id="itemQuantity" 
              placeholder="Enter Amount" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)}
            />              
            <button type="submit">Submit</button>             
        </form>
    )
}

export default EditItem;