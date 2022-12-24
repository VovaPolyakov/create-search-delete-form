import React,{useState} from 'react'

const LogIn = ({searchUser}) => {
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
    <div className='login'>
      <h1>Log In</h1>
      <p>Name:</p>
      <input onChange={handleChange} name='name' type='text' required></input>
      <p>Email:</p>
      <input name='email' type='email' required></input>
      <p>Password:</p>
      <input name='password' type='password' required></input>
      <div>
        <h1>Log In</h1>
        <input type='checkbox' required></input>
        <button onClick={handleClick}>Log In</button>
      </div>
    </div>
  )
}

export default LogIn
