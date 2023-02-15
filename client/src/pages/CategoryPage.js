import React from "react"
import NewCategory from "../components/Category/NewCategory";
import CategoryRender
 from "../components/Category/CategoryRender";


function CategoryPage(){
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch(`/categories`)
    .then((r) => r.json())
    .then((data) => setCategoryList(data))
    .catch(error => alert(error));
  },[]);

  function addCat(itemObj){
    setCategoryList([...categoryList, itemObj]);
  }


  return(
    <div className="CategoryDisplay">
        <header>
        <br/>
        <h1>Category List</h1>
        <div className="SubHeader">
            <h3>Category</h3>
        </div>
        </header>
        <NewCategory addCat={addCat}/>
        <CategoryRender list={categoryList}/>
    </div>
)


}

export default CategoryPage;