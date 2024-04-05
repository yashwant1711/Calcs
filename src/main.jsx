import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Emi from '../src/calculator/EmiCalc/Emi';
import Sip from './calculator/SipCalc/Sip';
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/emi",
    element: <Emi/>,
  },
  {
    path: "/sip",
    element: <Sip/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
