import React from 'react'
import { NavLink , Link } from 'react-router-dom'



function Home() {
  return (
    <div>
      <div className="text-xl font-bold text-gray-500 flex gap-2 m-3">
        <NavLink to="/" >
        <h2 >Navi </h2>
        </NavLink>
        <h2> &gt;</h2>
        <h2> Calculators</h2>
        </div>

        <Link to="/emi">
        <h2>Emi Calculator</h2>
        </Link>

        <Link to="/sip">
        <h2>Sip Calculator</h2>
        </Link>
        
    </div>
  )
}

export default Home
