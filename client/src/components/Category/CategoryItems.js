import React, {useState, useEffect} from "react";

function CategoryItems({id, name, items}){
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [itemList, setItemList] = useState(items);

  // useEffect(() => {
  //   fetch(`/categories/${id}`)
  //   .then((r) => r.json())
  //   .then((data) => setItemList(data))
  //   .catch(error => alert(error));
  // },[itemList]);


  const catList = itemList.map((item) => 
    <div key={item.id} id={item.id}>
     <p>{item.name} x {item.quantity}</p>
    </div>
  )

  function toggle(){
    setCategoryToggle((categoryToggle) => !categoryToggle);
  }

  return(
    <div className="body">
      <button id={id} onClick={toggle}>{name}</button>
      <br/>
      {categoryToggle ? (
        catList
      ) : ( 
        null
      )}
      <hr/>
      <br/>
    </div>
  ) 

}

export default CategoryItems;

