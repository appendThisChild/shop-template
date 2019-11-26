import React, { useContext, useMemo, useState } from 'react'
import axios from "axios"
import useReactRouter from 'use-react-router'

// import { usePrompt } from "../context/PromptProvider.js"

const CategoryContext = React.createContext()

const dataAxios = axios.create()

dataAxios.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const CategoryProvider = props => {
    const [category_id, setCategory_id] = useState(0)
    const [category, setCategory] = useState({ title: '"No Category"'})
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [limitPerPage, setLimitPerPage] = useState(10)

    const { history, location } = useReactRouter()
    
    const category_idState = useMemo(() => ({ category_id, setCategory_id }), [category_id])
    const pageState = useMemo(() => ({ page, setPage }), [page])
    const limitPerPageState = useMemo(() => ({ limitPerPage, setLimitPerPage }), [limitPerPage])

    const getCategory = (admin, cb) => {
        if (category_id.length > 8){
           axios.get(`/category/${category_id}`)
                .then(res => {
                    if (res.data.active || admin){
                        setCategory(res.data)
                        cb()
                    }
                })
                .catch(err => console.log(err.response.data.errMsg))
        }
    }
    const getProducts = () => {
        axios.post(`/product/all/${category_id}`, { amountPerPage: limitPerPage, multiplier: page })
            .then(res => setProducts(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }
    const postNewProduct = newObj => {
        if (!sessionStorage.getItem("token")){
            history.push("/password", location.pathname)
        } else {
            dataAxios.post('/api/admin/product', {...newObj, category_id})
                .then(res => setProducts([...products, res.data]))
                .catch(err => console.log(err.response.data.errMsg))
        }
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
                getProducts,
                postNewProduct
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