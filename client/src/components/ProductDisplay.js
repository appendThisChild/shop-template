import React, { useEffect, useState } from 'react'

import DefaultImage from "../images/download.png"

const ProductDisplay = ({ product, openProduct }) => {
    const [image, setImage] = useState(DefaultImage)

    useEffect(() => {
        // find photo
        // 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <section onClick={() => openProduct(product._id)}>
            <section>
                <img src={image} alt={product.title}/>
                <div className={product.quantity > 0 ? "inStock" : "soldOut"}>{product.quantity > 0 ? "In Stock" : "Sold Out"}</div>
            </section>
            <main>
                <h2>{product.subTitle}</h2>
                <section>
                    <p>$$</p>
                    <p>:</p>
                    <p>{product.price.full !== product.price.discounted ? `${(product.price.full / 100).toFixed(2)}` : ""}</p>
                    <p>{(product.price.discounted / 100).toFixed(2)}</p>
                    <p>{product.price.full !== product.price.discounted ? `( ${100 - parseInt((product.price.discounted / product.price.full) * 100)}% Off! )` : ""}</p>
                </section>
            </main>
            <aside>
                <h1>{product.title}</h1>
            </aside>
        </section>
    )
}

export default ProductDisplay;