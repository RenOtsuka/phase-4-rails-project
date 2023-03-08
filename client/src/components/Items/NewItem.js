import React, { useState } from "react";

function NewItem({user_id, addItem, categoryList}){
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [errors, setErrors] = useState([]);


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
            quantity: quantity,
            user_id: user_id,
            category_id: categoryId
        })
    })
    .then((r) => {
      if(r.ok){
        r.json().then(data => addItem(data));
      }
      else{
        r.json().then(err => setErrors(err.errors));
        // console.log(errors);
      }
    }).catch(error => alert(error));
    setName("");
}

  const categoryOptions = categoryList.map((category) => 
        <option key={category.id} value={category.id}>{category.name}</option>
  )

return(
  <>
    <h1>Items</h1>
    <form className="newItem" onSubmit={handleSubmit}>
      <input 
      type="text" 
      id="itemName" 
      placeholder="Enter desciption..." 
      value={name} 
      onChange={(e) => setName(e.target.value)}
      />    

      <input 
      type="number" 
      id="itemQuantity" 
      placeholder="Enter an Amount"
      min={0}
      inputMode="numeric"
      value={quantity} 
      onChange={(e) => setQuantity(e.target.value)}
      />
      {/* <br/> */}
      <label> Choose a category: </label>      
      <select id="categories" onChange={(e) => setCategoryId(e.target.value)}>
        <option value={0}>Select An Option</option>
        {categoryOptions}
      </select>

      <button type="submit">Submit</button>
      {errors.map((err) => (<error key={err}> {err + "."} </error>))}
    </form>
  </>
  
)


}

export default NewItem;