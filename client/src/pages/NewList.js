import React, { useState } from "react";
import { useHistory } from "react-router";
import {FormField} from "@formfield/react";

function NewList(){
  const[title, SetTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

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
    .then((r) => {
      if(r.ok){
        history.push("/");
      }
      else{
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }

  return(
    <form className="NewListForm" onSubmit={handleSubmit}>
      <label>Enter Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <FormField>
        {errors.map((err) => (<error key={err}>{err}</error>))}
      </FormField>
    </form>
  );

}

export default NewList;