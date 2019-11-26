import React, { useContext, useState } from 'react'
import axios from "axios"

const UserContext = React.createContext()

const UserProvider = props => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {
        email: ""
    })
    const [token, setToken] = useState(sessionStorage.getItem('token') || "")
    const [errMsg, setErrMsg] = useState("")

    const signup = credentials => {
        axios.post("/auth/signup", credentials)
        .then(res => updateCredentials(res.data))
        .catch(err => setErrMsg(err.response.data.errMsg))
    }
    const login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => updateCredentials(res.data))
            .catch(err => setErrMsg(err.response.data.errMsg))
    }
    const updateCredentials = credentials => {
        const { user, token } = credentials
        localStorage.user = JSON.stringify(user)
        sessionStorage.token = token
        setUser(user)
        setToken(token)
    }
    const logout = () => {
        localStorage.removeItem('user')
        sessionStorage.removeItem('token')
        setUser({
            email: ""
        })
        setToken("")
    }
    return(
        <UserContext.Provider 
            value={{
                user,
                token,
                signup,
                login,
                logout,
                errMsg
            }}
            {...props}
        />
    )
}

const useUser = () => {
    const context = useContext(UserContext)
    if (!context){
        throw new Error("You must use PasswordRecoveryProvider to consume PasswordRecovery Context")
    }
    return context
}

export { UserProvider, useUser }