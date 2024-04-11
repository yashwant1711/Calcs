import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Emi from '../src/calculator/EmiCalc/Emi';
import Sip from './calculator/SipCalc/Sip';
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomeL from './calculator/HomLCalc/HomeL.jsx';
import Mutualfund from './calculator/Mutualfund/MutuF.jsx';
import Lumsumcalc from './calculator/Lumsum/LumsumCalc.jsx';
import Fdcalc from './calculator/FdCalc/Fdcalc.jsx';

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
  },
  {
    path: "/homl",
    element: <HomeL/>
  },
  {
    path: "/mul",
    element: <Mutualfund/>
  },
  {
    path: "/lumscal",
    element: <Lumsumcalc/>
  },
  {
    path: "/fdcal",
    element: <Fdcalc/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
