import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <div class="header">
      <Link to="/EmployeeHomePage" id="EmployeeHomePage" className='logo'> Service Request Management</Link>
        <div class="header-right">
          <Link to="#" id="Home"> Home</Link>
          <Link to="/RequestList" id="RequestList"> Request List</Link>
        </div>
      </div>
    </div>
  )
}
