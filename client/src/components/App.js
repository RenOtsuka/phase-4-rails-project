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

  const {user,setUser} = useContext(UserContext);
  const [categoryList, setCategoryList] = useState([]);
  const [userCat, setUserCat] = useState([]);
  

  useEffect(() => {
    fetch(`/allcategories`)
    .then((r) => r.json())
    .then((data) => {setCategoryList(data)})
    .catch(error => alert(error));
  },[user]);

  useEffect(() => {
    fetch(`/categories`)
    .then((r) => r.json())
    .then((data) => {setUserCat(data)})
    .catch(error => alert(error));
  },[user]);




  console.log(user)

  function addItem(itemObj){
    const itemList = [...user.items, itemObj];
    const updateUser = {
      ...user, items: itemList
    }
    setUser(updateUser);
  }

  function onDeleteItem(id){
    const itemList = [...user.items];
    const newList = itemList.filter((item) => item.id !== id);
    const updateUser = {
      ...user, items: newList
    }

    setUser(updateUser);
  } 

  function onEditItem(editedItemObj){
    const itemList = [...user.items];
    const updateList = itemList.map( (item) => {
        if(item.id === editedItemObj.id){
            return editedItemObj;
        }
        else {
            return item;
        }
    });

    const updateUser = {
      ...user, items: updateList
    }

    setUser(updateUser);
  }


  function addCat(itemObj){
    setCategoryList([...categoryList, itemObj]);
  }

  if (!user.id) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Switch>
          <Route exact path ="/categories">
            <CategoryPage user={user} itemList={user.items} userCat={userCat} addCat={addCat} />
          </Route>

          <Route  exact path="/new">
            <NewItem categoryList={categoryList} addItem={addItem}/>
          </Route>

          <Route path="/">
            <ItemList itemList={user.items} onEditItem={onEditItem} onDeleteItem={onDeleteItem}/>
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
