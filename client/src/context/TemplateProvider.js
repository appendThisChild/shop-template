import React, { useContext, useMemo, useState, useEffect } from 'react'
// import axios from "axios"

const TemplateContext = React.createContext()

const TemplateProvider = props => {
    // state access
    const [providerData, setProviderData] = useState('')

    // meno acess
    const data = useMemo(() => ({ providerData, setProviderData }), [providerData])

    // first cycles
    useEffect(() => {
        setProviderData("provider data")
    }, [])

    return(
        <TemplateContext.Provider 
            value={{
                ...data
            }}
            {...props}
        />
    )
}

const useTemplate = () => {
    const context = useContext(TemplateContext)
    if (!context){
        throw new Error("You must use Provider to consume Context")
    }
    return context
}

export { TemplateProvider, useTemplate }