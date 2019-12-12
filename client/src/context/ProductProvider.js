import React, { useContext, useState } from 'react'
import axios from 'axios'

// import DefaultImage from "../images/download.png"

const ProductContext = React.createContext()

const ProductProvider = props => {
    const [product, setProduct] = useState('')
    // const [image, setImage] = useState(DefaultImage)

    // const data = useMemo(() => ({ providerData, setProviderData }), [providerData])

    const getProduct = _id => {
        axios.get(`/product/${_id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <ProductContext.Provider 
            value={{
                product,
                getProduct
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