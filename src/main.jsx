import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router'

import './index.css'

import Home from './components/home.jsx'
import Shop from './components/shop.jsx'
import Cart from './components/cart.jsx'
import Product from './components/product.jsx'
import CartProvider from './cartContext.jsx'



let router=createBrowserRouter([
 {
  path:'/',
  Component:Home
 },
 {
  path:'/shop',
  Component:Shop
  },
 {
  path:'/product',
  Component:Product
  },
 {
  path:'/cart',
  Component:Cart
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <CartProvider>
    <RouterProvider  router={router}/>
  </CartProvider>
   
   
  </StrictMode>,
)
