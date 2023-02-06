import React from "react";
import { Link } from "react-router-dom";

function Navbar({user, setsUser}){

  function handleLogout(){
    fetch("/logout", {
      method: "DELETE",
    })
    .then(r => {
      if (r.ok){
        setsUser(null);
      }
    })
  }

  return(
    <div className="NavBar">
      <li><Link exact to="/">Lists</Link></li>
      <li><Link exact to="/items">Items</Link></li>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;