import React from 'react'
import './Style.css'
import AdminNavbar from '../NavSide/AdminNavbar'
import { useNavigate } from 'react-router-dom';
export default function CancelledViewServiceRequest() {
	let navigate=useNavigate();
	const HandleClick=()=>{
		
		navigate('/AdminRequestList')
	}
  return (
    <div>
		<AdminNavbar/>
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
			  <td align="left" class="mainLabel">Hardware
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
	  	 <tr>
		 			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
		 			  <td align="left" class="mainLabel"  width="20%">
		 			  Description
		 			  </td>
		 			  <td align="left" class="mainLabel">
		 			  Sound Card
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
				  Cancelled
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
			 <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Reason for Cancellation
				  </td>
				  <td align="left" class="mainLabel">
				    Sound card already enabled in the trainer m/c
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
			 <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Committed Date
				  </td>
				  <td align="left" class="mainLabel">

				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>


			 <tr >
				<td align="center" colspan="4">
				<div align="center">
				&nbsp;
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
