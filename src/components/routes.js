//import React,{useEffect, useState}  from 'react';
import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./routes.css"
import Login from './pages/Login';
import Register from './pages/Register';
import AdminHomePage from './pages/AdminHomePage';
import EmployeeHomePage from './pages/EmployeeHomePage';
import RequestList from './Requests/RequestList'
import CreateServiveRequest from './Requests/CreateServiceRequest'
// import CompletedViewServiceRequest from './Requests/CompletedViewServiceRequest'
// import RejectedViewServiceRequest from './Requests/RejectedViewServiceRequest'
// import AssignedViewServiceRequest from './Requests/AssignedViewServiceRequest'
// import CancelledViewServiceRequest from './Requests/CancelledViewServiceRequest'
// import RequestedViewServiceRequest from './Requests/RequestedViewServiceRequest'
// import AdminRequestedViewServiceRequest from './Requests/AdminRequestedViewServiceRequest'
// import AdminAssignedViewServiceRequest from './Requests/AdminAssignedViewServiceRequest'
 import AdminRequestList from './Requests/AdminRequestList'
// import AdminRejectedViewServiceRequest from './Requests/AdminRejectedViewServiceRequest'
// import AdminCancelledViewServiceRequest from './Requests/AdminCancelledViewServiceRequest'
// import AdminCompletedViewServiceRequest from './Requests/AdminCompletedViewServiceRequest'
import Details from './Requests/details';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import ForgotPassword from './pages/ForgotPassword';
// import axios from 'axios';


 function RouterExample (){
    // const [posts, setPost] = useState([]);
    // const [email, setEmail]=useState('');
    // const [password, setPassword]=useState('')
    //  useEffect(() => {
    //     setEmail(localStorage.getItem("email"))
    //     setPassword(localStorage.getItem("password"))
    //     axios
    //     .get(`http://localhost:3001/details`)
    //     .then((Response)=>
    //     setPost(Response.data))
    //        //console.log(Response.data)
    //     .catch((err)=>{
    //         console.log(err)
    //         // setError(err.message);
    //     });
        
    //   },[])
    useEffect(()=>{
       

    })
    
    return(
        <div>
            <Router>
             <Routes>
                <Route path="/ForgotPassword" element = {<ForgotPassword/>}/>
                <Route path="/Register" element = {<Register/>}/>
                <Route path="/" element= {<Login/>}/> 
                <Route path="/AdminHomePage" element = {<AdminHomePage/>}/>
                    <Route path="/Details" element = {<Details/>}/>
                    <Route path="/AdminPage/:id" element = {<AdminPage/>}/> 
                    <Route path="/AdminRequestList" element = {<AdminRequestList/>}/>
                     {/*<Route path="/AdminCompletedViewServiceRequest" element = {<AdminCompletedViewServiceRequest/>}/>
                    <Route path="/AdminRejectedViewServiceRequest" element = {<AdminRejectedViewServiceRequest/>}/>
                    <Route path="/AdminCancelledViewServiceRequest" element = {<AdminCancelledViewServiceRequest/>}/>
                    <Route path="/AdminRequestedViewServiceRequest" element = {<AdminRequestedViewServiceRequest/>}/>
                    <Route path="/AdminAssignedViewServiceRequest" element = {<AdminAssignedViewServiceRequest/>}/> */}
                    <Route path="/EmployeeHomePage" element = {<EmployeeHomePage/>}/>
                    <Route path="/EmployeePage/:id" element = {<EmployeePage/>}/>
                     <Route path="/RequestList" element = {<RequestList/>}/>
                    <Route path="/CreateServiceRequest" element = {<CreateServiveRequest/>}/>
                    {/*<Route path="/CompletedViewServiceRequest" element = {<CompletedViewServiceRequest/>}/>
                    <Route path="/RejectedViewServiceRequest" element = {<RejectedViewServiceRequest/>}/>
                    <Route path="/AssignedViewServiceRequest" element = {<AssignedViewServiceRequest/>}/>
                    <Route path="/CancelledViewServiceRequest" element = {<CancelledViewServiceRequest/>}/>
                    <Route path="/RequestedViewServiceRequest" element = {<RequestedViewServiceRequest/>}/>    */}
             </Routes>
            </Router>    
            
        </div>
    )
 }

 export default RouterExample