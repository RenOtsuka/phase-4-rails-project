import React, { useState } from "react";
import {FormField} from "@formfield/react";

function SignUpForm({onLogin}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username,
        password, 
        password_confirmation: passwordConfirmation
      })
    })
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => onLogin(user))
      }
      else{
        r.json().then((err) => setErrors(err.errors));
      }
    })

  }

  return(
    <form className="signupform" onSubmit={handleSubmit}>
      <label>Username</label>    
      <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Password Confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      
      <FormField>
        {errors.map((err) => (<error key={err}>{err}</error>))}
      </FormField>
    </form>
  );
}

export default SignUpForm;