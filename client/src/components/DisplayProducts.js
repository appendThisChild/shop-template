import React from 'react'

import ProductDisplay from "./ProductDisplay.js"

const DisplayProducts = props => {
    const { admin, products, history } = props

    const openProduct = _id => {
        if (admin){
            history.push(`/dashboard/product=${_id}`)
        } else {
            history.push(`/product=${_id}`)
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