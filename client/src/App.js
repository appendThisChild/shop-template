import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import PageNotFound from "./components/PageNotFound.js"
import Template from "./components/Template.js"
import Prompt from "./components/Prompt.js"
import Shop from "./components/Shop.js"
import CategoryList from "./components/CategoryList.js"
import Auth from "./components/Auth.js"
import Password from "./components/Password.js"
import Dashboard from "./components/Dashboard.js"
import ProductDetails from "./components/ProductDetails.js"

const App = () => {

    return(
        <div>
            <Prompt />
            <Switch>
                <Route path="/pageNotFound" render={renderProps => <PageNotFound {...renderProps}/>}/>
                <Route path="/template" render={renderProps => <Template {...renderProps}/>}/>
                {/*  */}
                {/*  */}
                {/* I should create some styling for the client sides */}
                {/*  */}
                {/*  */}
                <Route path="/shop" render={renderProps => <Shop className="dashboardShop" {...renderProps}/>}/>
                <Route path="/category=:id" render={renderProps => <CategoryList className="dashboardCategoryList" {...renderProps}/>}/>
                {/* add product here */}
                <Route path="/product=:id" render={renderProps => <ProductDetails className="dashboardProduct" {...renderProps}/>}/>

                <Route path="/auth=:type" render={renderProps => <Auth {...renderProps}/>}/>
                <Route path="/password" render={renderProps => <Password {...renderProps}/>}/>
                <Route path="/dashboard/:section=:id" render={renderProps => <Dashboard {...renderProps}/>}/>
                <Route path="/dashboard/:section" render={renderProps => <Dashboard {...renderProps}/>}/>
            </Switch>
        </div>
    )
}

export default App;