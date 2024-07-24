import './App.css'
import LoginForm from './Login_page'
import Welcome_page from './welcome_page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Router> 
      <Routes> 
        <Route path="/" element={<LoginForm/>}/> 
      
  
  
      <Route path='/Welcomepg' element={<Welcome_page />}/> 
      


    </Routes>
    </Router>
    </>
  )
}
export default App
