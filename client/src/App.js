import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Template from "./components/Template.js"
import Category from "./components/Category.js"

const App = () => {

    return(
        <div>
            <Switch>
                <Route path="/template" render={renderProps => <Template {...renderProps}/>}/>
                <Route path="/category=:id" render={renderProps => <Category {...renderProps}/>}/>
                
            </Switch>
        </div>
    )
}

export default App;