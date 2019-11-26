import React, { useContext, useMemo, useState } from 'react'
import axios from "axios"


const CategoryContext = React.createContext()

const CategoryProvider = props => {
    const [category_id, setCategory_id] = useState(0)
    const [category, setCategory] = useState({})
    const [products, setProducts] = useState([{}])
    const [page, setPage] = useState(0)
    const [limitPerPage, setLimitPerPage] = useState(10)
    
    const category_idState = useMemo(() => ({ category_id, setCategory_id }), [category_id])
    const pageState = useMemo(() => ({ page, setPage }), [page])
    const limitPerPageState = useMemo(() => ({ limitPerPage, setLimitPerPage }), [limitPerPage])


    const getCategory = cb => {
        console.log(category_id)


        // this is where I left off


        // setCategory()
        axios.get(`/category/${category_id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.errMsg))
        cb()
    }
    
    const getProducts = () => {
        console.log(category_id)
        
        // setProducts()
    }

    return(
         <CategoryContext.Provider 
            value={{
                ...category_idState,
                ...pageState,
                ...limitPerPageState,
                category,
                products,
                getCategory,
                getProducts
            }}
            {...props}
        />
    )
}

const useCategory = () => {
    const context = useContext(CategoryContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { CategoryProvider, useCategory }