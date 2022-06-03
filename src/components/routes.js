import React  from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./routes.css"
import Login from './pages/Login';
import Register from './pages/Register';
import AdminHomePage from './pages/AdminHomePage';
import EmployeeHomePage from './pages/EmployeeHomePage';
import RequestList from './Requests/RequestList'
import CreateServiveRequest from './Requests/CreateServiceRequest'
import CompletedViewServiceRequest from './Requests/CompletedViewServiceRequest'
import RejectedViewServiceRequest from './Requests/RejectedViewServiceRequest'
import AssignedViewServiceRequest from './Requests/AssignedViewServiceRequest'
import CancelledViewServiceRequest from './Requests/CancelledViewServiceRequest'
import RequestedViewServiceRequest from './Requests/RequestedViewServiceRequest'
import AdminRequestedViewServiceRequest from './Requests/AdminRequestedViewServiceRequest'
import AdminAssignedViewServiceRequest from './Requests/AdminAssignedViewServiceRequest'
import AdminRequestList from './Requests/AdminRequestList'
import AdminRejectedViewServiceRequest from './Requests/AdminRejectedViewServiceRequest'
import AdminCancelledViewServiceRequest from './Requests/AdminCancelledViewServiceRequest'
import AdminCompletedViewServiceRequest from './Requests/AdminCompletedViewServiceRequest'
import Details from './Requests/details';
import Adminoldpage from './pages/Adminoldpage';


 function RouterExample (){
    
    return(
        <div>
            {/* <h1>Service Request Management</h1> */}
            <Router>
                <Routes>
                    <Route path="/" element= {<Login/>}/>
                    <Route path="/Register" element = {<Register/>}/>
                    <Route path="/AdminHomePage" element = {<AdminHomePage/>}/>
                    <Route path="/EmployeeHomePage" element = {<EmployeeHomePage/>}/>
                    <Route path="/Details" element = {<Details/>}/>
                    <Route path="/Adminoldpage/:id" element = {<Adminoldpage/>}/>


                    <Route path="/RequestList" element = {<RequestList/>}/>
                    <Route path="/AdminRequestList" element = {<AdminRequestList/>}/>
                    <Route path="/CreateServiceRequest" element = {<CreateServiveRequest/>}/>
                    <Route path="/CompletedViewServiceRequest" element = {<CompletedViewServiceRequest/>}/>
                    <Route path="/AdminCompletedViewServiceRequest" element = {<AdminCompletedViewServiceRequest/>}/>
                    <Route path="/RejectedViewServiceRequest" element = {<RejectedViewServiceRequest/>}/>
                    <Route path="/AdminRejectedViewServiceRequest" element = {<AdminRejectedViewServiceRequest/>}/>
                    <Route path="/AssignedViewServiceRequest" element = {<AssignedViewServiceRequest/>}/>
                    <Route path="/CancelledViewServiceRequest" element = {<CancelledViewServiceRequest/>}/>
                    <Route path="/AdminCancelledViewServiceRequest" element = {<AdminCancelledViewServiceRequest/>}/>
                    <Route path="/RequestedViewServiceRequest" element = {<RequestedViewServiceRequest/>}/>
                    <Route path="/AdminRequestedViewServiceRequest" element = {<AdminRequestedViewServiceRequest/>}/>
                    <Route path="/AdminAssignedViewServiceRequest" element = {<AdminAssignedViewServiceRequest/>}/>

                </Routes>
            </Router>
        </div>
    )
 }

 export default RouterExample