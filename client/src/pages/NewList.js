import React, { useState } from "react";

function NewList({user}){
  const[title, SetTitle] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    fetch("/todolists", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: title,
      }),
    })
    .then(r => {
      if(r.ok){
        r.json()
        .then()
      }
      else{
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }

  return(
    <form className="NewListForm" onSubmit={handleSubmit}>
      <label>Enter Title</label>
      <Input
        type="text"
        id="title"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <FormField>
        {errors.map((err) => (<Error key={err}>{err}</Error>))}
      </FormField>
    </form>
  );

}

export default NewList;