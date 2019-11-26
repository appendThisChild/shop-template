import React from 'react'


const AuthForm = ({ className, title, btnText, handleChange, handleSubmit, email, password, firstName, lastName, login, setLogin, errMsg }) => {
    return(
        <form onSubmit={handleSubmit} className={className}>
            <h1>{title}</h1>
            {login ? 
            <p>New? <span onClick={() => setLogin(!login)}>Click here</span> to create an account.</p>
            :
            <>
                <p>Already have an account? <span onClick={() => setLogin(!login)}>Click here</span> to sign in.</p>
                <input type="text" name="firstName" value={firstName} onChange={handleChange} required={true} placeholder="First Name"/>
                <input type="text" name="lastName" value={lastName} onChange={handleChange} required={true} placeholder="Last Name"/>
            </>}
            <input type="email" name="email" value={email} onChange={handleChange} required={true} placeholder="Email"/>
            <input type="password" name="password" value={password} onChange={handleChange} required={true} placeholder="Password"/>
            <span>{errMsg}</span>
        <button>{btnText}</button>
        </form>
    )
}

export default AuthForm;