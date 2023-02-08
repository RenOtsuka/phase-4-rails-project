import React, { useState } from "react";

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
        usersame,
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
      <Label>Username</Label>    
      <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
      />

      <Label>Password</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Label>Password Confirmation</Label>
      <Input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      
      <FormField>
        {errors.map((err) => (<Error key={err}>{err}</Error>))}
      </FormField>
    </form>
  );
}

export default SignUpForm;