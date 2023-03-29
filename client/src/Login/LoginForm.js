import React, { useState } from "react";

function LoginForm({onLogin}){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(r => {
     
      if(r.ok){
        r.json().then(user => onLogin(user));
      }
      else {
        setIsLoading(false);
        r.json().then((err) => setErrors(err.errors));
      }
    })
  }

  return(
    <form className="loginform" onSubmit={handleSubmit}>

      <label>Username </label>    
      <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
      />

      <label> Password </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">{isLoading ? "Loading..." : "Login"}</button>   
      
      {errors.map((err) => (<error key={err}> {err + "."} </error>))}
  
    </form>
    
  );
}

export default LoginForm;