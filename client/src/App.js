import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Template from "./components/Template.js"
import Prompt from "./components/Prompt.js"
import Shop from "./components/Shop.js"
import CategoryList from "./components/CategoryList.js"
import Auth from "./components/Auth.js"
import Password from "./components/Password.js"
import Dashboard from "./components/Dashboard.js"

const App = () => {

    return(
        <div>
            <Prompt />
            <Switch>
                <Route path="/template" render={renderProps => <Template {...renderProps}/>}/>
                {/*  */}
                {/*  */}
                {/* I should create some styling for the client sides */}
                {/*  */}
                {/*  */}
                <Route path="/shop" render={renderProps => <Shop className="" {...renderProps}/>}/>
                <Route path="/category=:id" render={renderProps => <CategoryList className="" {...renderProps}/>}/>
                {/* add product here */}
                <Route path="/auth=:type" render={renderProps => <Auth {...renderProps}/>}/>
                <Route path="/password" render={renderProps => <Password {...renderProps}/>}/>
                <Route path="/dashboard/:section=:id" render={renderProps => <Dashboard {...renderProps}/>}/>
                <Route path="/dashboard/:section" render={renderProps => <Dashboard {...renderProps}/>}/>
            </Switch>
        </div>
    )
}

export default App;