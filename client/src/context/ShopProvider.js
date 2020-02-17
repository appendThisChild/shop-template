import React, { useContext, useState } from 'react'
import axios from "axios"
import useReactRouter from 'use-react-router'

import { usePrompt } from "../context/PromptProvider.js"

const ShopContext = React.createContext()

const dataAxios = axios.create()

dataAxios.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const ShopProvider = props => {
    const [shopDetails, setShopDetails] = useState({})
    const [categories, setCategories] = useState([])
    const { displayPrompt } = usePrompt()
    const { history, location } = useReactRouter()

    const getDetails = () => {
        if (!sessionStorage.getItem("token")){
            history.push("/password", location.pathname)
        } else {
            dataAxios.get('/api/admin/shop/details')
            .then(res => setShopDetails(res.data))
            .catch(err => console.log(err.response.data.errMsg))
        }
    }
    const resetShopDetails = () => {
        setShopDetails({})
    }
    const getCategories = () => {
        axios.get('/category')
            .then(res => setCategories(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }
    const postNewCategory = newObj => {
        if (!sessionStorage.getItem("token")){
            history.push("/password", location.pathname)
        } else {
            dataAxios.post('/api/admin/category', newObj)
            .then(res => setCategories([...categories, res.data]))
            .catch(err => console.log(err.response.data.errMsg))
        }
    }
    const updateCategory = (_id, updates) => {
        if (!sessionStorage.getItem("token")){
            history.push("/password", location.pathname)
        } else {
            dataAxios.put(`/api/admin/category/${_id}`, updates)
            .then(res => setCategories(categories.map(category => category._id === _id ? res.data : category)))
            .catch(err => console.log(err.response.data.errMsg))
        }
    }
    const deleteCategory = _id => {
        displayPrompt({ 
            mainMessage: "Are are sure you want to delete this category?", 
            subMessage: "All products inside will be deleted.", 
            _id, 
            cb: (obj) => confirmedCategoryDeletion(obj)
        })
    }
    const confirmedCategoryDeletion = ({ _id, answer }) => {
        if (answer){
            if (!sessionStorage.getItem("token")){
                history.push("/password", location.pathname)
            } else {
                dataAxios.delete(`/api/admin/category/${_id}`)
                    .then(res => setCategories(categories.filter(category => category._id !== res.data._id)))
                    .catch(err => console.log(err.response.data.errMsg))
            }
        }
    }
    return(
        <ShopContext.Provider 
            value={{
                shopDetails,
                resetShopDetails,
                categories,
                getDetails,
                getCategories,
                postNewCategory,
                updateCategory,
                deleteCategory
            }}
            {...props}
        />
    )
}

const useShop = () => {
    const context = useContext(ShopContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { ShopProvider, useShop }