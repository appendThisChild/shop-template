import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import "./styles.css"

// Providers
import { TemplateProvider } from "./context/TemplateProvider.js"
import { CategoryProvider } from "./context/CategoryProvider.js"

ReactDOM.render( 
    <BrowserRouter>
        <TemplateProvider>
            <CategoryProvider>
                <App />
            </CategoryProvider>
        </TemplateProvider>
    </BrowserRouter>
,
document.getElementById("root"))