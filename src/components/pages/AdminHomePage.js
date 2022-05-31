import React from 'react'
import AdminNavbar from '../NavSide/AdminNavbar'


export default function AdminHomePage() {

  return (
    <div className="body">
        {/* <h1>Admin Home Page</h1> */}
        <div className="grid-container">
         <AdminNavbar/>
         <h1>Welcome To Admin Home Page</h1>
        </div>
    </div>
  )
}