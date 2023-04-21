import React from "react"
import NewCategory from "../components/Category/NewCategory";
import CategoryRender from "../components/Category/CategoryRender";


function CategoryPage({user, itemList,userCat, addCat}){

  
  return(
    <div className="CategoryDisplay">
        <header>
        <br/>
        <h1>Category List</h1>
        </header>
        <NewCategory addCat={addCat}/>
        <CategoryRender itemList={itemList} userCat={userCat} user={user}/>
    </div>
)


}

export default CategoryPage;