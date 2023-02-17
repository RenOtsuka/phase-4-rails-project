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
      <Link to="/">Lists</Link>
      <br/>
      <Link to="/items">Items</Link>
      <br/>
      <Link to="/categories">Categories</Link>
      <br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;