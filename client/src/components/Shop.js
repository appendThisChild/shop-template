import React, { useEffect } from 'react'

// Provider
import { useShop } from "../context/ShopProvider.js"

// Components
import CreateCategory from "./CreateCategory.js"
import DisplayCategories from "./DisplayCategories.js"

const Shop = props => {
    const { admin, className } = props
    const { categories, getCategories, postNewCategory } = useShop()
    
    useEffect(() => {
        getCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div className={admin ? "dashboardShop" : className}>
            <h1>Shop</h1>
            {admin ?
            <CreateCategory submitCategory={postNewCategory}/>
            :null}
            <DisplayCategories admin={admin} _id={0} categories={categories} {...props}/>
        </div>
    )
}

export default Shop;