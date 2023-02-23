import './App.css';

import React, { useEffect, useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { UserContext } from "../context/user";
import Navbar from './Navbar';
import Login from "../pages/Login";
import ToDoLists from "../pages/ToDoLists";
import NewList from "../pages/NewList"
import ItemList from '../pages/ItemList';
import CategoryPage from '../pages/CategoryPage';

function App() {

  const {user, setUser} = useContext(UserContext);
  const[toDoLists, SetToDoLists] = useState([]);
  const[itemList, SetItemList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  // useEffect(() => {
  //   fetch("/todolists")
  //   .then(r => r.json())
  //   .then(data => SetToDoLists(data))
  // },[]);

  // useEffect(() => {
  //   fetch("/items")
  //   .then(r => r.json())
  //   .then(data => SetItemList(data))
  // },[]);

  // useEffect(() => {
  //   fetch(`/categories`)
  //   .then((r) => r.json())
  //   .then((data) => setCategoryList(data))
  //   .catch(error => alert(error));
  // },[]);


  // useEffect( () => {
  //   fetch("/me")
  //   .then((r) => {
  //     if(r.ok){
  //       r.json().then((user) => setUser(user))
  //     }
  //   })
  // }, []);

  function addList(itemObj){
    SetToDoLists([...toDoLists, itemObj]);
  }

  function onDeleteItem(id){
    const newList = itemList.filter((item) => item.id !== id);
    SetItemList(newList);
  } 

  function onEditItem(editedItemObj){
    const updateList = itemList.map( (item) => {
        if(item.id === editedItemObj.id){
            return editedItemObj;
        }
        else {
            return item;
        }
    });
    SetItemList(updateList);
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <main>
       
            <Switch>
            <Route path="/">
              <ToDoLists 
              toDoLists={toDoLists} 
              itemList={itemList} 
              SetItemList={SetItemList}
              categoryList={categoryList}
              onDeleteItem={onDeleteItem} 
              onEditItem={onEditItem}
              />
            </Route>

            <Route path="/new">
              <NewList addList={addList}/>
            </Route>

            <Route path="/items">
              <ItemList itemList={itemList} onDeleteItem={onDeleteItem} onEditItem={onEditItem}/>
            </Route>

            <Route path="/categories">
              <CategoryPage  categoryList={categoryList} setCategoryList={setCategoryList}/>
            </Route>

          </Switch>
       
      </main>
    </div>
  );
}

export default App;
