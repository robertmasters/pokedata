//
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const initialState = {
    credentials: {
    name: '',
    username: '',
    password: ''
  }
}


export default function Register() {
    const [state, setState] = useState(initialState)
    const history = useHistory()


function handleChange(e) {
    setState({
        credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
            
        }
    })
    console.log("state: ",state)
   }
    return (
        <div>
            <h1>Register</h1>
            <label>
            Enter Name: 
            <input 
                type = 'text'
                name = 'name'
                value = {state.credentials.name}
                onChange ={handleChange}
            />
            </label>
            <label>
            Enter Username: 
            <input 
                type = 'text'
                name = 'username'
                value = {state.credentials.username}
                onChange ={handleChange}
            />
            </label>
            <label>Enter Password: 
            <input
                type="password"
                name="password"
                value={state.credentials.password}
                onChange={handleChange}
            />
            </label>
            <button>Register</button>
        </div>
    )
}
