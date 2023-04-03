import React, {useState} from "react";

function CategoryItems({id, items, name, categoryToggle, setCategoryToggle}){

  // const catList = items.map((item) => 
  //   <p id={item.id}>{item.task}</p>
  // ) 

//  const [categoryToggle, setCategoryToggle] = useState(false);

//   function toggle(){
//     setCategoryToggle((categoryToggle) => !categoryToggle);
//   }

  return(
    <div className="item_body">
      {/* <button id={id} onClick={toggle}>{name}</button> */}
      {categoryToggle ? (
        <div key={items.id} id={items.id}>
          <p>{items.name} x {items.quantity}</p>
        </div>
      ) : ( 
       null
      )}
    </div>
  ) 

}

export default CategoryItems;

