import React from 'react'

export default function Login(props) {

    let setAlert = () => alert(`Username: ${props.username}, Password: ${props.password}`)

    return (
        <button onClick={setAlert} >Login</button>
    )
}