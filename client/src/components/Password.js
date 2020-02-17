import React, { useEffect, useState } from 'react'

// Provider
import { useUser } from "../context/UserProvider.js"

const Password = props => {
    const [password, setPassword] = useState('')
    const { user, token, login, errMsg } = useUser()
    const handleSubmit = e => {
        e.preventDefault()
        login({ email: user.email, password})
    }
    useEffect(() => {
        if (user.email === "") {
            props.history.push("/auth=login", props.history.location.state)
        } else if (sessionStorage.getItem('token') !== null){
            props.history.push(props.history.location.state || "/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
    return(
        <div>
            <form onSubmit={handleSubmit} className="authForm">
                <h1>Confirm Password</h1>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password..."/>
                <span>{errMsg ? '"Password incorrect!"': ""}</span>
                <button>Confirm</button>
            </form>
        </div>
    )
}

export default Password;