import React, { useState, useEffect } from 'react'
import './Style.css'
import Navbar from '../NavSide/Navbar'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RequestList() {
	const  [Requests, setRequests] = useState([]);
  //const [error, setError] = useState([])
	let navigate=useNavigate();
	const HandleClick=()=>{
		
		navigate('/EmployeeHomePage')
	}


	useEffect((e) => {
		
		//Access data from local server
		axios
		.get(`http://localhost:3001/NewRequests`)
		.then((Response)=>setRequests(Response.data))
		   //console.log(Response)
		.catch((err)=>{
			console.log(err)
			//setError(err.message);
		});
	  },[])
		
  return (
    <div>
		<Navbar/><br/>
     
<table width="100%" border="0" cellspacing="0" cellpadding="4">
	  <tr>
	      <td>
	      <table width="100%" align="center" border="0" cellpadding="6" cellspacing="4" bgcolor="#ccffcc" className="outerTable">
		    <tr align="center" >
			  <td class="tableHeader" align="center" colspan="4">
			  <b>Request Details</b>
			  </td>
		    </tr>

	         <tr>
			  <td align="right" class="mainLabel" >
			                <table width="85%" border="2" cellspacing="2" cellpadding="2"
			                      class="outerTable" align="center" id="TABLE1">
			   					<tr>
			                    <td class="tblHeader" width="10%" height="10">Request #</td>
			                    <td class="tblHeader" width="10%" height="10">Request Type</td>
			                    <td class="tblHeader" width="10%" height="10">Requested Date</td>
			                    <td class="tblHeader" width="10%" height="10">Assigned Date</td>
			                    <td class="tblHeader" width="10%" height="10">Committed Date</td>
			                    <td class="tblHeader" width="10%" height="10">Completed Date</td>
			                    <td class="tblHeader" width="15%" height="10">Status</td>

			                  </tr>
							  
            					 {Requests.length &&
									Requests.map((post) => (
                					<tr>
                  					<td class="tblDataText" >&nbsp;<Link to={`/EmployeePage/${post.id}`}>{post.RequestId} </Link> </td>
			
									<td class="tblDataText" >&nbsp; {post.RequestType} </td>
									<td class="tblDataText" >&nbsp; {post.RequestedDate}</td>
									<td class="tblDataText" >&nbsp; {post.AssignedDate}</td>
									<td class="tblDataText" >&nbsp; {post.CommittedDate}</td>
									<td class="tblDataText" >&nbsp; {post.CompletedDate}</td>
									<td class="tblDataText" >&nbsp; {post.Status} </td>
									</tr>
              					))
            					}
								
			  			   
			                </table>
			  </td>
	  	  </tr>
	  	  </table>
	  	  <table align="center">
		  <tr align="center" >

				<td align="center" >
				<div>
				{/* <button name="btnBack" onClick="return back() ">Back</button> */}
				<button name="btnBack" onClick={HandleClick}>Back</button>
				</div>
				</td>
  		  </tr>
		  </table>
		  </td>
	  </tr>
  </table>
    </div>
  )
}
