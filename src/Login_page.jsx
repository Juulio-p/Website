import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom';
//import createStore from 'react-auth-kit/createStore'; 



function LoginForm() {
    const [username, setname] = useState(""); 
    const [password, setpswd] = useState(""); 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${username}`);
      alert(`The password you entered was: ${password}`);
    };
    return (
      <div id='container'>
          <div id= "divider" >
              <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div> 
              </div>
        <div id="form-quote">
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

        <p>Dont Have an Account ?  register here </p>

        <Link to="/Register "> 
        <button name="register" type='submit' id="register">register </button>
        </Link>
        </form>

          <div id="bottomnote"> where new beginings thrive, sambo making the world a better place one
          one friendship at a time
          </div>
        </div> 

        <h2 id="about-me-title">About the Company </h2>

        <div class="about-me">
            <img src="https://media.licdn.com/dms/image/v2/C5603AQFvASYtwv8SpQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631381700592?e=1731542400&v=beta&t=mPZ51_EYbyd9t2_qHQo8jm-61IOXjt4GUDjmWPieKPc" alt="pic of ceo" class="ceo-img"/>
            <p class="about-description">
            As the CEO of Sambo , I believe in shaping the future through innovation and leadership. Dedicated to empowering teams, fostering creativity, and turning bold ideas into reality. Join me on a journey of growth and impact!
            </p>
        </div>



      </div>
    );
  }
  
export default LoginForm;
