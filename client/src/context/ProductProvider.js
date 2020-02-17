import React, { useContext, useState } from 'react'
import axios from 'axios'

// import DefaultImage from "../images/download.png"

const ProductContext = React.createContext()

const ProductProvider = props => {
    const [product, setProduct] = useState('')
    // const [image, setImage] = useState(DefaultImage)

    const getProduct = (_id, admin, cb) => {
        axios.get(`/product/${_id}`)
            .then(res => {
                if (res.data.active || admin){
                    setProduct(res.data)
                    cb("success")
                } else {
                    cb("not active")
                }
            })
            .catch(err => cb(err.response.data.errMsg))
    }
    const resetProduct = () => {
        setProduct('')
    }

    return(
        <ProductContext.Provider 
            value={{
                product,
                getProduct,
                resetProduct
            }}
            {...props}
        />
    )
}

const useProduct = () => {
    const context = useContext(ProductContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { ProductProvider, useProduct }