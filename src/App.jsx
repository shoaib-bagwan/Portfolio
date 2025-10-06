import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import './App.css'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Project from './Project'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<>
        <Home/>
        <About/>
        <Project/>
        </>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Project/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
