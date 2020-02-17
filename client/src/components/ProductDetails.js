import React, { useEffect } from 'react'

// Provider
import { useProduct } from "../context/ProductProvider.js" 

const ProductDetails = props => {
    const {admin, className} = props

    const { product, getProduct, resetProduct } = useProduct()

    useEffect(() => {
        getProduct(props.match.params.id, admin, (message) => {
            if (message !== "success"){
                props.history.push("/pageNotFound")
            }
        })
        return () => {
            resetProduct()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(product)
    if (product === ''){
        return null
    } else {
        return(
            <div className={admin ? "dashboardProduct" : className}>
                {/* showing the details of the product */}
                {/* if admin, allowing for edits in the design */}
                {/*  */}
                Product Details
            </div>
        ) 
    }
}

export default ProductDetails;