import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AboutUsPage from './Pages/AboutUsPage'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import TestPage from './Pages/TestPage'
import AdminPage from './Pages/AdminPage'
import LoginPage from './Pages/LoginPage'


function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/test' element={<TestPage/>} />
          <Route path='/aboutus' element={<AboutUsPage/>} />
          <Route path='/admin' element={<AdminPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
