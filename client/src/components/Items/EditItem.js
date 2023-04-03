import React, { useState } from "react";

function EditItem({id, name, quantity, category_id, editItem}){

    const [editName, setEditName] = useState(name);
    const [editQuantity, setEditQuantity] = useState(quantity);
    const [errors, setErrors] = useState([]);

    function handleEdit(e){
        e.preventDefault();

        fetch(`/items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                name: editName,
                quantity: editQuantity,
                category_id: category_id,
              }),
        })
        .then((r) => {
          if(r.ok){
            r.json().then(data => editItem(data));
          }
          else{
            r.json().then(err => setErrors(err.errors));
            console.log(errors);
          }
        }).catch(error => alert(error));

    }

    return(
        <form className="editItem" onSubmit={handleEdit}>
            <input 
              type="text" 
              id="itemName" 
              placeholder="Enter desciption..." 
              value={editName} 
              onChange={(e) => setEditName(e.target.value)}
            />    
            <input 
              type="number" 
              id="itemQuantity" 
              inputMode="numeric"
              placeholder="Enter Amount" 
              min={0}
              value={editQuantity} 
              onChange={(e) => setEditQuantity(e.target.value)}
            />              
            <button type="submit">Submit</button>
            {errors.map((err) => (<error key={err}>{err}</error>))}             
        </form>
    )
}

export default EditItem;