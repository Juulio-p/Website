import { useState } from 'react'
import './App.css'



function LoginForm() {


  const [username, setname] = useState(""); 
  const [password, setpswd] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${username}`);
    alert(`The password you entered was: ${password}`);


  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={ (e) => setname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={ (e)=> setpswd (e.target.value)}
        />
      </div>
      <button name="login" type="submit" id="login">Log In</button>
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
