import { useState } from 'react'
import './App.css'


function App() {

  return (
    <>

    <div id= "div1">
    <label for="text input"> Text input:</label>
    <input
    type="text"
    id="text"
    />
    </div>
    
    <div id ="div2">
    <label for= "file"> File Input:</label>
    <input 
    id="file" 
    type="file"
    />
    </div>


    <div id="div3"> 
      <input id="sub" type = "submit"></input>
    </div>

    </>
  )
}

export default App
