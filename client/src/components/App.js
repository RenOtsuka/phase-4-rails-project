import './App.css';

import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from './Navbar';
import Login from "../pages/Login";
import ToDoLists from "../pages/ToDoLists";
import NewList from "../pages/NewList"

function App() {

  const [user, setUser] = useState(null);

  useEffect( () => {
    fetch("/me")
    .then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
       <Navbar user={user} setUser={setUser}/>
      <main>
        <Switch>
          <Route path="/new">
            <NewList/>
          </Route>
          <Route path="/">
            <ToDoLists/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
