import React from "react"
import NewCategory from "../components/Category/NewCategory";
import CategoryRender from "../components/Category/CategoryRender";
import Navbar from "../components/Navbar";

function CategoryPage({user, setUser, itemList,categoryList, addCat}){

  // function addCat(itemObj){
  //   setCategoryList([...categoryList, itemObj]);
  // }

  return(
    <div className="CategoryDisplay">
       {/* <Navbar user={user} setUser={setUser}/> */}
        <header>
        <br/>
        <h1>Category List</h1>
        </header>
        <NewCategory addCat={addCat}/>
        <CategoryRender itemList={itemList} categoryList={categoryList} user={user}/>
    </div>
)


}

export default CategoryPage;