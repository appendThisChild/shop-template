import React, { useState } from 'react'


const CreateCategory = ({ submitCategory }) => {
    const [newCategory, setNewCategory] = useState({
        title: ''
    })
    const handleChange = e => {
        setNewCategory({
            ...newCategory,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        submitCategory(newCategory)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Category</h1>
            <input type="text" name="title" value={newCategory.title} onChange={handleChange} required={true} placeholder="Category Title..." />
            <button>Submit Category</button>
        </form>
    )
}

export default CreateCategory;