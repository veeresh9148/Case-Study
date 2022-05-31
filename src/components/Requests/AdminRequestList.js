import React from 'react'
import './Style.css'
import AdminNavbar from '../NavSide/AdminNavbar'
import { Link, useNavigate } from 'react-router-dom';

export default function RequestList() {
	let navigate=useNavigate();
	const HandleClick=()=>{
		
		navigate('/AdminHomePage')
	}
  return (
    <div>
		<AdminNavbar/>
      {/* <form method="post" name="frmRequestDetails" action=""> */}
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
			  			    <tr>
			                    <td class="tblDataText" >&nbsp;<Link to="/AdminCompletedViewServiceRequest" id="AdminCompletedViewServiceRequest"> 111111</Link> </td>
			                    <td class="tblDataText" >&nbsp; Software </td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp; 31/05/2022</td>
			                    <td class="tblDataText" >&nbsp; 31/05/2022</td>
			                    <td class="tblDataText" >&nbsp; Completed </td>
			                </tr>
			                <tr>

			                    <td class="tblDataText" >&nbsp; <Link to="/AdminCancelledViewServiceRequest" id="AdminCancelledViewServiceRequest"> 222222</Link></td>
			                    <td class="tblDataText" >&nbsp; Hardware </td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp; Cancelled </td>
			                </tr>
			                <tr>

			                    <td class="tblDataText" >&nbsp; <Link to="/AdminRejectedViewServiceRequest" id="AdminRejectedViewServiceRequest"> 333333</Link></td>
			                    <td class="tblDataText" >&nbsp; Job Request </td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp; Rejected </td>
			                </tr>
			                <tr>

			                    <td class="tblDataText" >&nbsp;<Link to="/AdminAssignedViewServiceRequest" id="AdminAssignedViewServiceRequest">444444</Link> </td>
			                    <td class="tblDataText" >&nbsp; Job Request </td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp; Assigned </td>
			                </tr>
			                <tr>

			                    <td class="tblDataText" >&nbsp;<Link to="/AdminRequestedViewServiceRequest" id="AdminRequestedViewServiceRequest">555555</Link> </td>
			                    <td class="tblDataText" >&nbsp; Job Request </td>
			                    <td class="tblDataText" >&nbsp; 30/05/2022</td>
			                    <td class="tblDataText" >&nbsp; </td>
			                    <td class="tblDataText" >&nbsp; </td>
			                    <td class="tblDataText" >&nbsp;  </td>
			                    <td class="tblDataText" >&nbsp; Requested </td>
			                </tr>

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

{/* </form> */}


    </div>
  )
}
