import React, { useEffect, useState } from 'react'

// Provider
import { useCategory } from "../context/CategoryProvider.js"

// Component 
import CreateProduct from "./CreateProduct.js"
import DisplayProducts from "./DisplayProducts.js"

const CategoryList = props => {
    const { admin, className } = props
    const [createToggle, setCreateToggle] = useState(false)
    const { category_id, setCategory_id, category, products, getCategory, getProducts, resetCategory, postNewProduct } = useCategory()
    const { id } = props.match.params
    useEffect(() => {
        setCategory_id(id)
        return () => {
            resetCategory()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (category_id !== 0){
            getCategory(admin, (message) => {
                if (message === "success"){
                    getProducts()
                } else {
                    props.history.push("/pageNotFound")
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category_id])
    if (category === ''){
        return null
    } else {
        return(
            <div className={admin ? "dashboardCategoryList" : className}>
                <h1>{category.title}</h1>
                {admin ?
                    <span onClick={() => setCreateToggle(!createToggle)}>{createToggle ? <>Cancel</> : <>Create New Product</>}</span>
                :null}
                {createToggle ?
                    <CreateProduct submitProduct={postNewProduct} toggler={setCreateToggle}/>
                :
                    <DisplayProducts admin={admin} products={products} {...props}/>
                }
                
            </div>  
        )
    }
    
}

export default CategoryList;