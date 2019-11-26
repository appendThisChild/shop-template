import React, { useEffect } from 'react'

// Provider
import { useCategory } from "../context/CategoryProvider.js"

// Component 
import CreateProduct from "./CreateProduct.js"
import DisplayProducts from "./DisplayProducts.js"

const CategoryList = props => {
    const { _id, admin, className } = props
    const { category_id, setCategory_id, category, products, getCategory, getProducts, postNewProduct } = useCategory()
    useEffect(() => {
        setCategory_id(admin ? _id : props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        getCategory(admin, () => getProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category_id])
    return(
        <div className={admin ? "dashboardCategoryList" : className}>
            <h1>{category.title}</h1>
            {admin ?
            <>
            <CreateProduct submitProduct={postNewProduct} />
            </>
            :null}
            <DisplayProducts admin={admin} products={products} {...props}/>
        </div>  
    )
}

export default CategoryList;