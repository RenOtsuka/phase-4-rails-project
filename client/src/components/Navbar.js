import React from "react";
import { Link } from "react-router-dom";

function Navbar({user, setUser}){

  function handleLogout(){
    fetch("/logout", {
      method: "DELETE",
    })
    .then((r) => {
      if (r.ok){
        setUser(null);
      }
    })
  }

  return(
    <div className="NavBar">
      <br/>
      <Link to="/">Items</Link>
      <br/>
      <Link to="/categories">Categories</Link>
      <br/>
      <button onClick={handleLogout}>Logout</button>
      <br/>
    </div>
  );
}

export default Navbar;