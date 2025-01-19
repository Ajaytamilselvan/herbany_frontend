import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './components/product_page/ProductPage.js'
import HomePage from './components/home_page/HomePage.jsx'
import ContactForm from './components/ContactForm/ContactForm.js'
import Navbar from './components/Navbar/Navbar.js'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/contact' element={<ContactForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;