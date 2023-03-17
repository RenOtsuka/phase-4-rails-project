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
    .then((data) => {
      setCategoryList(data)
    })
    .catch(error => alert(error));
  },[itemList]);

  useEffect(() => {
    SetItemList(user.items)
  },[user])


  function addItem(itemObj){
    SetItemList([...itemList, itemObj]);
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
            <CategoryPage user={user} itemList={itemList} categoryList={categoryList} addCat={addCat} />
          </Route>

          <Route  exact path="/new">
            <NewItem user={user} addItem={addItem} categoryList={categoryList}/>
          </Route>

          <Route path="/">
            <ItemList itemList={itemList} onEditItem={onEditItem} onDeleteItem={onDeleteItem}/>
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
