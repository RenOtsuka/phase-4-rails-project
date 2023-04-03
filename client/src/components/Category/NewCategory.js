import React, {useState} from "react";

function NewCategory({addCat}){

    const [newCategory, setNewCategory] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/categories`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: newCategory,
            })
        })
        .then(r =>{
            if(r.ok){
                r.json().then(data => addCat(data))
            }
            else{
                r.json().then(err => setErrors(err.errors));
                // console.log(errors);
            }
        })
        .catch(error => alert(error));

        setNewCategory("");
    }

    return(
        <>
            <form className="newItem" onSubmit={handleSubmit}>
                <input 
                type="text" 
                id="category" 
                placeholder="Enter new category..." 
                value={newCategory} 
                onChange={(e) => setNewCategory(e.target.value)}
                />         
                <button type="submit">Submit</button>
                {errors.map((err) => (<error key={err}> {err + "."} </error>))}   
            </form>
            
        </>
    )
}

export default NewCategory;