import React, { useEffect, useState } from 'react'

// Provider
import { useTemplate } from "../context/TemplateProvider.js"

const Template = () => {
    // access to state
    const [templateData, setTemplateData] = useState('')

    // access to provider 
    const { providerData } = useTemplate()

    const updateTemplateData = data => {
        setTemplateData(data)
    }

    // react lifecycle 
    // enter params into array for updates
    useEffect(() => {
        updateTemplateData("some data")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(templateData)
    console.log(providerData)
    return(
        <div>
            Template
        </div>
    )
}

export default Template;