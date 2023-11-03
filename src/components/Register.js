import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const[username , setUsername] = useState([])
    const[password , setPassword] = useState([])

  return (
    <>
    <div>
        <div>
            <input type='text' placeholder='Enter username' required />
            <br/>
            <br/>
            <input type='password' placeholder='Enter password' required />
            <br/>
            <br/>
            <button>Register</button>
            <p>Already a member <Link to='/'>Login</Link></p>
        </div>
    </div>
    </>
  )
}

export default Register