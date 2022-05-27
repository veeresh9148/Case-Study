import React  from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./routes.css"
import Login from './pages/Login';
import Register from './pages/Register';
import AdminHomePage from './pages/AdminHomePage';
import EmployeeHomePage from './pages/EmployeeHomePage';

 function RouterExample (){

    return(
        <div>
            <h1>Service Request Management</h1>
            <Router>
                <Routes>
                    <Route path="/" element= {<Login/>}/>
                    <Route path="/Register" element = {<Register/>}/>
                    <Route path="/AdminHomePage" element = {<AdminHomePage/>}/>
                    <Route path="/EmployeeHomePage" element = {<EmployeeHomePage/>}/>
                </Routes>
            </Router>
        </div>
    )
 }

 export default RouterExample