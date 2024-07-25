import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom';



function LoginForm() {
    const [username, setname] = useState(""); 
    const [password, setpswd] = useState(""); 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${username}`);
      alert(`The password you entered was: ${password}`);
    };
    return (

      <form onSubmit={handleSubmit} id="form">
        <h1> Welcome To Sambo, Please Log in! </h1>

        <div id = "div1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={ (e) => setname(e.target.value)}
          />
        </div>
        <div id="div2">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={ (e)=> setpswd (e.target.value)}
          />
        </div>

        <Link to="/Welcomepg" > 
        <button name="login" type="submit" id="login">Log In</button>
        </Link>
      </form>

    );
  }
  
export default LoginForm;