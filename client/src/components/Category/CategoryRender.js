import React from "react";
import CategoryItems from "./CategoryItems"

function CategoryRender({categoryList}){
    const categoryRender = categoryList.map( category => (
        category.items.length > 0 ? (
            <CategoryItems
            key={category.id}
            id={category.id}
            name={category.name}
            items={category.items}
            />
        ) : (
         null
        )
    ))

    return (
        <ul className="CategoryRender">{categoryRender}</ul>
    );
}

export default CategoryRender;