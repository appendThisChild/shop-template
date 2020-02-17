import React, { useEffect, useState } from 'react'

// Provider
import { useShop } from "../context/ShopProvider.js"

// Components
import CreateCategory from "./CreateCategory.js"
import DisplayCategories from "./DisplayCategories.js"

const Shop = props => {
    const { admin, className } = props
    const [createToggle, setCreateToggle] = useState(false)
    const { categories, getCategories, postNewCategory } = useShop()
    
    useEffect(() => {
        getCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div className={admin ? "dashboardShop" : className}>
            <h1>Shop</h1>
            {admin ?
                <span onClick={() => setCreateToggle(!createToggle)}>{createToggle ? <>Cancel</> : <>Create New Category</>}</span>
            :null}
            {createToggle ?
                <CreateCategory submitCategory={postNewCategory} toggler={setCreateToggle}/>
            : 
                <DisplayCategories admin={admin} categories={categories} {...props}/>
            }
        </div>
    )
}

export default Shop;