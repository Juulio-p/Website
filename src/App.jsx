import { useState } from 'react'
import './App.css'



function LoginForm() {
  return(
    <form>
      <div>
        <label htmlFor="username">  UserName:</label>
        <input type= "username" id="username" />
         
        </div>

        <div> 
        <label htmlFor="password">  Password:</label>
        <input type= "password" id="password" /> 
        </div>

        <div>
          
        </div>

        <button  name="login"  type="submit" id="login">Log In</button>

    </form>

    
  ); 
}

function App() {

  return (
    <>

    <div id="div1">    
      <LoginForm /> 
    </div>
    </>
  )
}
export default App
