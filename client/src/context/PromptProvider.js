import React, { useContext, useState } from 'react'

const PromptContext = React.createContext()

const PromptProvider = props => {
    const [promptOn, setPromptOn] = useState(false)
    const [id, setId] = useState('')
    const [promptMessage, setPromptMessage] = useState({
        mainMessage: "",
        subMessage: ""
    })
    const [callback, setCallback] = useState({callback: ""})
    const displayPrompt = ({ mainMessage, subMessage, _id, cb }) => {
        setPromptMessage({
            mainMessage: mainMessage || "",
            subMessage: subMessage || ""
        })
        setId(_id)
        setCallback({ callback: cb })
        setPromptOn(!promptOn)
    }
    const endPrompt = answer => {
        callback.callback({ _id: id, answer })
        setPromptMessage({
            mainMessage: "",
            subMessage: ""
        })
        setId("")
        setCallback({callback: ""})
        setPromptOn(!promptOn)
    }
    return(
        <PromptContext.Provider 
            value={{
                promptOn,
                promptMessage,
                displayPrompt,
                endPrompt
            }}
            {...props}
        />
    )
}

const usePrompt = () => {
    const context = useContext(PromptContext)
    if (!context){
        throw new Error("You must use PasswordRecoveryProvider to consume PasswordRecovery Context")
    }
    return context
}

export { PromptProvider, usePrompt }