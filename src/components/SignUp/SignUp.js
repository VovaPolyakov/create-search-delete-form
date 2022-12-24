import React, { useState } from 'react'
import '../../App.css'

const SignUp = ({createUser}) => {
    const [infoAboutUser,setInfoAboutUser] = useState()
    const [inputAboutUser,setInputAboutUser] = useState({
        name: '',
        email: '',
        password: '',
        lastname: '',
        yearofbirthday: '',
        telephone: '',
    })
    const handleChange = (e) => {
        setInputAboutUser({
            ...inputAboutUser,
            [e.target.name]: e.target.value
        }
        )
    }
    const handleClick = (e) => {
        e.preventDefault();
        setInfoAboutUser(inputAboutUser)
        createUser(infoAboutUser)
    }
  return (
    <div className='signup'>
        <h1>Sign Up</h1>
        <form>
            <div>
                <p>Name</p>
                <input onChange={handleChange} type='text' name='name'  required></input>
                <p>Email</p>
                <input onChange={handleChange} type='email' name='email' required></input>
                <p>Password</p>
                <input onChange={handleChange} type='password' name='password' required></input>
            </div>
            <p>Sign Up</p>
            <input type='checkbox' name='signup' required></input>
            <p>LastName</p>
            <input onChange={handleChange} type='text' name='lastname' required></input>
            <p>Year of Birthday</p>
            <input onChange={handleChange} type='date' name='yearofbirthday' required></input>
            <p>Telephone</p>
            <input onChange={handleChange} type='telephone' name='telephone' required></input>
            <button onClick={handleClick} type='submit'> SignUp</button>
        </form>
    </div>
  )
}

export default SignUp
