import React, {useState} from "react";
import CategoryItems from "./CategoryItems"

function CategoryRender({itemList, categoryList, user}){

    const [categoryToggle, setCategoryToggle] = useState(false);

    function toggle(){
        setCategoryToggle((categoryToggle) => !categoryToggle);
    }

    if(user.categories.length > 0){

        const categoryRender = categoryList.map(category => {
          
            for(const user_cat of categoryList){ 
                    if(user_cat.id === category.id){
                    const catItems = itemList.map(item => (
                        itemList.length > 0 && item.category_id === category.id ? (
                        <CategoryItems
                        key={category.id}
                        id={category.id}
                        name = {category.name}
                        items={item}
                        categoryToggle={categoryToggle}
                        // setCategoryToggle={setCategoryToggle}
                        // toggle={toggle}
                        />
                        ) : (null)
                    ))

                    return(
                        <>
                        {category.items.length > 0 ? (
                            <div className="catItems">
                                <button id={category.id} onClick={toggle}>{category.name}</button>
                                {catItems}
                                <br/>
                            </div>
                        ): (null)}
                        </>
                    )
                }
                else{
                    continue
                }
            }
        })
           
        return (
            <ul className="CategoryRender">
                {categoryRender}
            </ul>
        );
    }
    else{
        return null;
    }
}

export default CategoryRender;