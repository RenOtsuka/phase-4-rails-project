import './App.css';

import React, { useEffect, useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { UserContext } from "../context/user";
import Navbar from './Navbar';
import Login from "../pages/Login";
import ItemList from '../pages/ItemList';
import CategoryPage from '../pages/CategoryPage';
import NewItem from './Items/NewItem';

function App() {

  const {user, setUser} = useContext(UserContext);
  const[itemList, SetItemList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);


  useEffect(() => {
    fetch(`/categories`)
    .then((r) => r.json())
    .then((data) => setCategoryList(data))
    .catch(error => alert(error));
  },[itemList]);

  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then(data => {SetItemList(data);})
  },[]);


  function addItem(itemObj){
    SetItemList([...itemList, itemObj]);
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Switch>

          <Route exact path ="/categories">
            <CategoryPage categoryList={categoryList} setCategoryList={setCategoryList}/>
          </Route>

          <Route exact path="/new">
            <NewItem user_id={user.id} addItem={addItem} categoryList={categoryList}/>
          </Route>

          <Route path="/">
            <ItemList itemList={itemList} SetItemList={SetItemList}/>
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
