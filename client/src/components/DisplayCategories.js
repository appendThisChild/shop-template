import React from 'react'

import CategoryDisplay from "./CategoryDisplay.js"

const DisplayCategories = props => {
    const { admin, categories } = props
    const openCategory = _id => {
        if (admin){
            props.history.push(`/dashboard/category=${_id}`)
        } else {
            props.history.push(`/category=${_id}`)
        }
    }
    const mappedCategories = categories.map(category => {
        if (admin) {
            return <CategoryDisplay key={category._id} admin={admin} openCategory={openCategory} category={category}/>
        } else if (category.active) {
            return <CategoryDisplay key={category._id} openCategory={openCategory} category={category}/>
        } else {
            return null;
        }
    
    })
    return(
        <main>
            <h1>Categories</h1>
            {mappedCategories}
        </main>
    )
}

export default DisplayCategories;