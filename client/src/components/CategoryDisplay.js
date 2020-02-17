import React, { useState } from 'react'

import { useShop } from "../context/ShopProvider.js"

const CategoryDisplay = ({ admin, category, openCategory }) => {
    const [onEdit, setOnEdit] = useState(false)
    const [categoryObj, setCategoryObj] = useState(category)
    const { updateCategory, deleteCategory } = useShop()
    const handleChange = e => {
        setCategoryObj({
            ...categoryObj,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateCategory(categoryObj._id, categoryObj)
        setOnEdit(!onEdit)
    }
    if (onEdit){
        return(
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={categoryObj.title} onChange={handleChange}/>
                <aside>
                    <span onClick={() => setOnEdit(!onEdit)}>&#x2613;</span>
                    <button>Save</button>
                </aside>
            </form>
        )
    } else {
        return(
            <section>
                <h1 onClick={() => openCategory(category._id)}>{category.title}</h1>
                {admin ?
                <aside>
                    <span onClick={() => updateCategory(category._id, { active: !category.active})}>{category.active ? <>&#x2691;</> : <>&#x2690;</>}</span>
                    <span onClick={() => setOnEdit(!onEdit)}>&#x270E;</span>
                    <span onClick={() => deleteCategory(category._id)}>&#x2612;</span>
                </aside>
                :null}
            </section>
        )
    }
}

export default CategoryDisplay;