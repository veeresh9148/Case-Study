import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import '../routes.css'

export default function Navbar() {
  return (
    <div>
      <div class="header">
      <img src="caritor.jpg" width="40px" height="40px" alt="" align="left"/>
      <Link to="/AdminHomePage" id="nav" className='logo'>Service Request Management</Link>
        <div class="header-right">
          <Link to="/AdminHomePage" id="nav"> Home</Link>
          <Link to="/AdminRequestList" id="nav"> Request List</Link>
        </div>
      </div>
    </div>
  )
}