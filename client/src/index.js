import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import "./styles.css"

// Providers
import { TemplateProvider } from "./context/TemplateProvider.js"
import { PromptProvider } from "./context/PromptProvider.js"
import { CategoryProvider } from "./context/CategoryProvider.js"
import { UserProvider } from "./context/UserProvider.js"
import { ShopProvider } from "./context/ShopProvider.js"


ReactDOM.render( 
    <BrowserRouter>
        <TemplateProvider>
            <PromptProvider>
                <UserProvider>
                    <ShopProvider>
                        <CategoryProvider>
                            <App />
                        </CategoryProvider>
                    </ShopProvider>
                </UserProvider>
            </PromptProvider>
        </TemplateProvider>
    </BrowserRouter>
,
document.getElementById("root"))