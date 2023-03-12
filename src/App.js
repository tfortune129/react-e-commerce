import React, { Component } from 'react'
import Nav from './Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Products from './Products'
import Cart from './Cart'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav></Nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />


          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
 

// <Products>
          //   <item>

          //   </item>
          // </Products>