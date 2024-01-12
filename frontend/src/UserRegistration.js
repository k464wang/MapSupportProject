import React, { useState, useRef } from 'react'
import axios from 'axios'

import "./UserRegistration.css"

export default function UserRegistration() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');


    let handleSubmit = event => {
        event.preventDefault();
        const post = {
            username: username,
            password: password,
            password2: password2,
            email: email,
            first_name: first_name,
            last_name: last_name
        };
        console.log (post)

        axios.post(
            '/api/user/',  post )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              })
    }
    return (
        <>
            <div className='register'>
                <form onSubmit={handleSubmit}>
                    <h1>Create New Account</h1>
                    <label for="email">Email</label><br/>
                    <input type="text" name="email" id="email" onChange = {(e) => setEmail(e.target.value)} /><br/>
                    <label for="username">Username</label><br/>
                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}/><br/>
                    <label for="password">Password</label><br/>
                    <input type="text" name="password" id="password" onChange={(e) => setPassword(e.target.value)} /><br/>
                    <label for="password2">Confirm your password</label><br/>
                    <input type="text" name="password2" id="password2" onChange={(e) => setPassword2(e.target.value)} /><br/>
                    <label for="first_name">First Name</label><br/>
                    <input type="text" name="first_name" id="first_name" onChange={(e) => setFirst_name(e.target.value)} /><br/>
                    <label for="last_name">Last Name</label><br/>
                    <input type="text" name="last_name" id="last_name" onChange={(e) => setLast_name(e.target.value)} /><br/><br/>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </>
    )
}
