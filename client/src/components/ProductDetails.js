import React, { useEffect } from 'react'

// Provider
import { useProduct } from "../context/ProductProvider.js" 

const ProductDetails = props => {
    const {_id, admin, className} = props

    const { product, getProduct } = useProduct()

    useEffect(() => {
        getProduct(admin ? _id : props.match.params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(product)
    if (product.active || admin){
        return(
            <div className={admin ? "dashboardProduct" : className}>
                {/* showing the details of the product */}
                {/* if admin, allowing for edits in the design */}
                {/*  */}
                Product Details
            </div>
        )
    } else {
        return(
            <div className="noProduct">
                <h2>"Product Doesn't Exist"</h2>
            </div>
        )
    } 
    
}

export default ProductDetails;