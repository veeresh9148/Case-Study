import React,{useState, useEffect} from 'react'
import './Style.css'
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

export default function AdminRequestedViewServiceRequest() {
	let navigate=useNavigate();
	let params=useParams();
	const [posts, setPosts] = useState([]);
	const [details, setdetails] = useState({Status:"", ReasonforRejection:"", CommittedDate:""})
	const HandleClick=()=>{
		
		navigate('/AdminRequestList')
	}
	const DetailsHandle = (e) => {
        setdetails({...details, [e.target.name]:e.target.value})
    }
	const HandleSubmit=()=>{
		axios
        .patch(`http://localhost:3001/NewRequests/${params.id}`, details)
        .then(res => (res.data))
        .catch(err => console.log(err));
     
		//navigate('/AdminHomePage')
	}
	useEffect(() => {
		//Access data from local server
		console.log({params})
		axios
		.get(`http://localhost:3001/NewRequests?id=${params.id}`)
		.then((Response)=>
		setPosts(Response.data))
		//setId(Response.id))
		   //console.log(Response.data)
		.catch((err)=>{
			console.log(err)
			// setError(err.message);
		});
	  })
  return (
    <div>
		
		{ posts.map((post) => (
                <div key={post.id}>
    
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
			  {post.Location}
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
	    <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Cubical No.
			  </td>
			  <td align="left" class="mainLabel">
			  {post.CubicalNo}
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
			<tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
					Department
				  </td>
				  <td align="left" class="mainLabel">
				  {post.Department}
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
		  	 </tr>
			 <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Required By
				  </td>
				  <td align="left" class="mainLabel">
				  {post.RequiredBy}
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
 		 <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Request Type
			  </td>
			  <td align="left" class="mainLabel">{post.RequestType}
			  </td>
			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
		 <tr>
		 			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
		 			  <td align="left" class="mainLabel"  width="20%">
		 			  Description
		 			  </td>
		 			  <td align="left" class="mainLabel">
		 			  {post.Description}
		 			  </td>
		 			  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
	  	 </tr>
		 <tr>
			  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
			  <td align="left" class="mainLabel"  width="20%">
			  Justification
			  </td>
			  <td align="left" class="mainLabel">
			  {post.Justification}
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
				   <select name="Status" class="txbEnabledText" onChange={DetailsHandle}>
					<option value="0"> Selected</option>
					<option value="Rejected">Rejected</option>
                	<option value="Cancelled">Cancelled</option>
					<option value="Assighned">Assigned</option>
                	<option value="Requested" selected>{post.Status}</option>

				  </select>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
			 <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Reason for Rejection
				  </td>
				  <td align="left" class="mainLabel">
				   <input type="text" name="ReasonforRejection" class="txbEnabledText" onChange={DetailsHandle}/>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr>
            {/* <tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Reason for Cancellation
				  </td>
				  <td align="left" class="mainLabel">
				   <input type="text" name="txtReason" class="txbEnabledText" readonly/>
				  </td>
				  <td align="right" class="mainLabel" width="20%">&nbsp;</td>
			 </tr> */}

			<tr>
				  <td align="right" class="mainLabel" width="30%">&nbsp;</td>
				  <td align="left" class="mainLabel"  width="20%">
				  Committed Date
				  </td>
				  <td align="left" class="mainLabel">
				   <input type="date" name="CommittedDate" class="txbEnabledText" onChange={DetailsHandle}/>
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
  </div>
			))
		}
    </div>
  )
}
