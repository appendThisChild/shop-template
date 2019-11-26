import React from 'react'

import ProductDisplay from "./ProductDisplay.js"

const DisplayProducts = props => {
    const { admin, products } = props

    const openProduct = _id => {
        if (admin){
            console.log("send to dashboard for product")
            
        } else {
            console.log("send to product")

        }
    }

    products.sort((a, b)=> {
        return a.order - b.order
    })
    const mappedProducts = products.map(product => {
        if (product.active || admin) {
            return <ProductDisplay key={product._id} openProduct={openProduct} product={product}/>
        } else {
            return null;
        }
    })
    return(
        <main>
            {/* add page and view options */}




            {mappedProducts}
        </main>
    )
}

export default DisplayProducts;