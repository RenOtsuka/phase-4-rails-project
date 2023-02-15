import React from "react";



function CategoryRender({list}){
    const categoryRender = list.map( item => (
        <CategoryItem
        key={item.id}
        id={item.id}
        name={item.name}
        />
    ))
    return (
        <ul className="CategoryRender">{categoryRender}</ul>
    )
}

export default CategoryRender;