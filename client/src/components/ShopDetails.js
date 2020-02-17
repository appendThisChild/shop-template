import React, { useEffect } from 'react'

// Provider
import { useShop } from "../context/ShopProvider.js"

const ShopDetails = props => {
    const { shopDetails, getDetails, resetShopDetails } = useShop()
    const openShop = () => {
        props.history.push("/dashboard/shop")
    }
    useEffect(() => {
        getDetails()
        return () => {
            resetShopDetails()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const shopDetailsArray = Object.entries(shopDetails)
    const mappedShopDetails = shopDetailsArray.map((entry, i) => {
        return(
            <section key={i}>
                <span>{entry[0]}: </span>
                <span>{entry[1]}</span>
            </section>
        )
    })
    return(
        <div className="shopDetails" onClick={openShop}>
            <h1>Shop Details</h1>
            {mappedShopDetails}
        </div>
    )
}

export default ShopDetails;