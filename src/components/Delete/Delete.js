import React from 'react'
import { useState } from 'react'

const Delete = ({searchUser}) => {
    const [inputLogInUser, setInputLogInUser] = useState({
        name:'',
        email:'',
        password:'',
      })
      const [LogInUser, setLogInUser] = useState()
    
      const handleChange = (e) => {
        setInputLogInUser({
          ...setInputLogInUser,
          [e.target.name]: e.target.value,
        })
      }
      const handleClick = (e) => {
        e.preventDefault();
        setLogInUser(inputLogInUser)
        searchUser(LogInUser)
      }
  return (
    <div className='delete'>
        <h1>Delete User</h1>
        <p>Name:</p>
        <input onChange={handleChange} name='name' type='text' required></input>
        <p>Email:</p>
        <input name='email' type='email' required></input>
        <p>Password:</p>
        <input name='password' type='password' required></input>
        <div>
            <input type='text' placeholder=' Why do you delete your account ?' required>
            </input>
            <div className='rate'>
                <input type='checkbox'></input>
                <input type='checkbox'></input>
                <input type='checkbox'></input>
                <input type='checkbox'></input>
                <input type='checkbox'></input>
            </div>
            <button onClick={handleClick}>Delete Account</button>
        </div>
    </div>
  )
}

export default Delete
