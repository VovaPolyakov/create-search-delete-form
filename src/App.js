
import './App.css';
import LogIn from './components/LogIn/LogIn';

import SignUp from './components/SignUp/SignUp';
import Delete from './components/Delete/Delete'


const userData = [];

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SignUp
          createUser={(infoAboutUser) => {
            if(infoAboutUser !== undefined){
              userData.push(infoAboutUser)
              console.log(userData)
            }
          }}
        >
        </SignUp>
        <LogIn
          searchUser={({name,email,password}) => {
            const foundUser = userData.map(user => {
              if(user.name === name || user.email === email || user.password === password){
                alert(`Welcome ${user.name} `)
                return user
              }
            })
          }}
        >
        </LogIn>
        <Delete
           searchUser={({name,email,password}) => {
            const deleteUser = userData.map(user => {
              if(user.name === name || user.email === email || user.password === password){
                return user
              }
            })
            let delUser = userData.find(item => item.id === deleteUser.id)
            console.log(delUser)
            // if(deleteUser != undefined){
            //   userData.filter((item) => item.name !== deleteUser.name)
            // }
            console.log(userData)
          }}
          
        >
        </Delete>
      </div>
    </div>
  );
}

export default App;
