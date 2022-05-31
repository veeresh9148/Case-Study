import React from 'react'
import Navbar from '../NavSide/Navbar'
import { useNavigate } from 'react-router-dom';
import './Style.css'
export default function CreateServiceRequest() {
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
      {/* <form method="post" name="frmCreateRequest" action=""> */}
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>
    	<table width="60%" align="center" border="0" cellpadding="6" cellspacing="4" bgcolor="#ccffcc" className="outerTable">
    	<tr align="center" >
			  <td class="tableHeader" align="center" colspan="4">
			  <b>Create Service Request</b>
			  </td>
    	</tr>
	    <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Location
			  </td>
			  <td align="left" class="mainLabel">
			  <select  name= "sltLocation" class="txbEnabledText">
			   <option value="0">--Select--</option>
			   <option value="1">BLR-SER1</option>
			   <option value="2">BLR-SER2</option>
			   <option value="3">BLR-BTR1</option>
			   <option value="4">BLR-BTR2</option>
			   <option value="5">CHN-PGR1</option>
			   <option value="6">CHN-PGR2</option>
			   <option value="7">CHN-PGR3</option>
			  </select>
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
	    <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Cubical No.
			  </td>
			  <td align="left" class="mainLabel">
			  <input type="text" name="txtCubical" class="txbEnabledText"/>
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
			<tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
					Department
				  </td>
				  <td align="left" class="mainLabel">
				  <select  name= "sltDepartment" class="txbEnabledText">
				  			   <option value="0">--Select--</option>
				  			   <option value="1">Training</option>
				  			   <option value="2">HR</option>
				  			   <option value="3">Infrastructure</option>
				  			   <option value="4">Delivery</option>
			  		</select>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
		  	 </tr>
			 <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Required By
				  </td>
				  <td align="left" class="mainLabel">
				  <input type="text" name="txtReq" class="txbEnabledText"/>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
 		 <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Request Type
			  </td>
			  <td align="left" class="mainLabel">
			   <select name="sltAccountType" class="txbEnabledText">
			  				<option value="0"></option>
			  				<option value="1">Job Request</option>
			  				<option value="2">Software Request</option>
			  				<option value="2">Hardware Request</option>
			  </select>
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
		 <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Description
			  </td>
			  <td align="left" class="mainLabel">
			   <textarea name="txtaDescription" class="txbEnabledText"></textarea>
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>

		 <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Justification
			  </td>
			  <td align="left" class="mainLabel">
			   <input type="text" name="txtJust" class="txbEnabledText"/>
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>

		 <tr >
				<td align="center" colspan="4">
				<div align="center">
				<input type = "Button"   value = "Save"
				onClick={HandleSubmit}/>  
				<button name="btnCancel" title="Close"
				onClick={HandleClick}>Close</button>
				</div>
				</td>
  		  </tr>
		  <tr>
		  <td colspan="4" class="mainLabel" id = "srNum" >
		  
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
