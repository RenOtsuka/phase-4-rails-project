import React, {useState, useEffect} from "react";

function CategoryItems(){
  const [categoryToggle, setCategoryToggle] = useState(false);


  function toggle(){
    setCategoryToggle((categoryToggle) => !categoryToggle);
  }

  return(
    <>
    </>
  ) 

}

export default CategoryItems;

