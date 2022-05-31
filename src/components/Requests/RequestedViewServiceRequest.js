import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../NavSide/Navbar'

export default function RequestedViewServiceRequest() {
	let navigate=useNavigate();
	const HandleClick=()=>{
		
		navigate('/RequestList')
	}
	const HandleSubmit=()=>{
		
		navigate('/EmployeeHomePage')
	}
  return (
    <div>
		<Navbar/>
      {/* <form method="post" name="frmUpdateRequest" action=""> */}
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>
    	<table width="60%" align="center" border="0" cellpadding="6" cellspacing="4" bgcolor="#ccffcc" class="outerTable">
    	<tr align="center" >
			  <td class="tableHeader" align="center" colspan="4">
			  <b>View Service Request</b>
			  </td>
    	</tr>
	    <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Location
			  </td>
			  <td align="left" class="mainLabel">
			  BLR- SER1
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
	    <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Cubical No.
			  </td>
			  <td align="left" class="mainLabel">
			  2056
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
			<tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
					Department
				  </td>
				  <td align="left" class="mainLabel">
				  Training
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
		  	 </tr>
			 <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Required By
				  </td>
				  <td align="left" class="mainLabel">
				   30/05/2022
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
 		 <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Request Type
			  </td>
			  <td align="left" class="mainLabel">Job Request
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
		 <tr>
		 			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
		 			  <td align="left" class="mainLabel"  width="20%">
		 			  Description
		 			  </td>
		 			  <td align="left" class="mainLabel">
		 			  Movement of m/c
		 			  </td>
		 			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
		 <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Justification
			  </td>
			  <td align="left" class="mainLabel">
			   Required for training purposes
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
	  </table>
	  <br/>


	  	<table  width="55%" align="center" border="0" cellpadding="6" cellspacing="4" bgcolor="#ccffcc" class="outerTable">

			  <tr align="center" >
				  <td class="tableHeader" align="center" colspan="4">
				  <b>Status Details</b>
				  </td>
			  </tr>

			  <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Status
				  </td>
				  <td align="left" class="mainLabel">
				   <select name="sltStatus" class="txbEnabledText" readonly>
								<option value="0"> Selected</option>
								<option value="1">Rejected</option>
                <option value="2">Cancelled</option>
								<option value="3">Assigned</option>
                <option value="4" selected>Requested</option>

				  </select>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
			 {/* <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Reason for Rejection
				  </td>
				  <td align="left" class="mainLabel">
				   <input type="text" name="txtReason" class="txbEnabledText" readonly/>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr> */}
 			<tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Reason for Cancellation
				  </td>
				  <td align="left" class="mainLabel">
				   <input type="text" name="txtReason" class="txbEnabledText" readonly/>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>

			<tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Committed Date
				  </td>
				  <td align="left" class="mainLabel">
				   <input type="date" name="txtCommitedDate" class="txbEnabledText" />
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>


			 <tr >
				<td align="center" colspan="4">
				<div align="center">
				<button name="btnSave" title="SaveSR"
				onClick={HandleSubmit}>Save</button>&nbsp;
				<button name="btnClose" title="Back"
				onClick={HandleClick}>Back</button>
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
