import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <div className="header">
      <Link to="/EmployeeHomePage" id="EmployeeHomePage" className='logo'> Service Request Management</Link>
        <div className="header-right">
          <Link to="#" id="Home"> Home</Link>
          <Link to="/CreateServiceRequest" id="CreateServiceRequest"> New Request</Link>
          <Link to="/RequestList" id="RequestList"> Request List</Link>
        </div>
      </div>
    </div>
  )
}
