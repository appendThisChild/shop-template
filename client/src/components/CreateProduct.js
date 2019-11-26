import React, { useState } from 'react'

const CreateProduct = ({ submitProduct }) => {
    const [newProduct, setNewProduct] = useState({
        title: "",
        subTitle: "",
        quantity: "",
    })
    const [priceObj, setPriceObj] = useState({
        full: "",
        discounted: ""
    })
    const handleProductChange = e => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }
    const handlePriceChange = e => {
        setPriceObj({
            ...priceObj,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        let newPriceObj = {}
        const priceArray = Object.entries(priceObj)
        priceArray.forEach(arr => {
            newPriceObj = {
                ...newPriceObj,
                [arr[0]]: parseFloat(arr[1]).toFixed(2) * 100
            }
        })
        submitProduct({...newProduct, quantity: parseInt(newProduct.quantity) , price: newPriceObj})
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Product</h1>
            <input type="text" name="title" value={newProduct.title} onChange={handleProductChange} required={true} placeholder="Title..." />
            <input type="text" name="subTitle" value={newProduct.subTitle} onChange={handleProductChange} required={true} placeholder="Subtitle..." />
            <input type="number" name="quantity" value={newProduct.quantity} onChange={handleProductChange} required={true} placeholder="Quantity..." />
            <input type="number" name="full" value={priceObj.full} onChange={handlePriceChange} required={true} placeholder="Full Price..." />
            <input type="number" name="discounted" value={priceObj.discounted} onChange={handlePriceChange} required={true} placeholder="Discounted Price..." />
            <button>Submit Product</button>
        </form>
    )
}

export default CreateProduct;