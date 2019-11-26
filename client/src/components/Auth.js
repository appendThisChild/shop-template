import React, { useEffect, useState } from 'react'
import AuthForm from './AuthForm'

// Provider
import { useUser } from "../context/UserProvider.js"

const Auth = props => {
    const [onLogin, setOnLogin] = useState('')
    const [authCredentials, setAuthCredentials] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })
    const { user, signup, login, logout, errMsg } = useUser()
    const handleChange = e => {
        setAuthCredentials({
            ...authCredentials,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (onLogin){
            login(authCredentials)
        } else {
            signup(authCredentials)
        }
    }
    useEffect(() => { 
        if (props.match.params.type === "logout"){
            logout()
            props.history.push("/") 
        } else if (props.match.params.type === "login"){
            setOnLogin(true)
        } else if (props.match.params.type === "signup"){
            setOnLogin(false)
        } else {
           props.history.push("/") 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        if (props.match.params.type !== "logout" && user.email !== "") {
            props.history.push(props.history.location.state || '/account')
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    return(
        <div>
            <AuthForm 
                className="authForm"
                title={onLogin ? "Login" : "Sign Up"}
                btnText={onLogin ? "Sign In" : "Create Account"}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                email={authCredentials.email}
                password={authCredentials.password}
                firstName={authCredentials.firstName}
                lastName={authCredentials.lastName}
                login={onLogin}
                setLogin={setOnLogin}
                errMsg={errMsg}
            />
        </div>
    )
}

export default Auth;