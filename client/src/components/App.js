import './App.css';

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import ToDoLists from "../pages/ToDoLists";
import ItemList from "../pages/ItemList";
import AddList from "../pages/AddList"

function App() {

  const [user, setUser] = useState(null);

  useEffect( () => {
    fetch("/me")
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => setUser(user))
      }
    })
  });

  return (
    <div className="App">
      <main>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
          <Route path="/">
            <ToDoLists/>
          </Route>
          <Route path="/new">
            <AddList user={user}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
