import React from "react"
import NewCategory from "../components/Category/NewCategory";
import CategoryRender from "../components/Category/CategoryRender";


function CategoryPage({categoryList, setCategoryList}){

  function addCat(itemObj){
    setCategoryList([...categoryList, itemObj]);
  }


  return(
    <div className="CategoryDisplay">
        <header>
        <br/>
        <h1>Category List</h1>
        </header>
        <NewCategory addCat={addCat}/>
        <CategoryRender categoryList={categoryList}/>
    </div>
)


}

export default CategoryPage;