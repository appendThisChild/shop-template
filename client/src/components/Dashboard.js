import React, { useEffect } from 'react'

// Provider
import { useUser } from "../context/UserProvider.js"

// Components
import DashboardNav from "./DashboardNav.js"
import ShopDetails from "./ShopDetails.js"
import Shop from "./Shop.js"
import CategoryList from './CategoryList.js'
import ProductDetails from './ProductDetails.js'

const Dashboard = props => {
    const { section, id } = props.match.params
    const { user } = useUser()
    useEffect(() => {
        if (!user.isAdmin){
            props.history.push("/auth=login", user.email === "" ? props.location.pathname : "/account")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div>
            <DashboardNav />
            {section === "general" ?
                <ShopDetails {...props}/>    
            : null}
            {section === "shop" ?
                <Shop admin={true} {...props}/>
            :null}
            {section === "category" ?
                <CategoryList admin={true} {...props}/>
            :null}
            {section === "product" ?
                <ProductDetails admin={true} _id={id} {...props}/>
            :null}
        </div>
    )
}

export default Dashboard;