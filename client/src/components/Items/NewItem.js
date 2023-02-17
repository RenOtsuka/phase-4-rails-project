import React, { useState } from "react";

function NewItem(){
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    fetch(`/items`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            quantity: quantity
        })
    })
    .then(r => r.json())
    .then(data => addItem(data))
    .catch(error => alert(error));
    
    setName("");
}

return(
  <form className="newItem" onSubmit={handleSubmit}>
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

export default NewItem;