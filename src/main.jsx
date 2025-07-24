import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './components/home.jsx'
import Shop from './components/shop.jsx'
import Cart from './components/cart.jsx'


let router=createBrowserRouter([
 {
  path:'/',
  Component:Home
 },
 {
  path:'shop',
  Component:Shop
 },
 {
  path:'cart',
  Component:Cart
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
