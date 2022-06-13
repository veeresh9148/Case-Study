import React,{useState, useEffect} from 'react'
import './Style.css'
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
export default function AdminCompletedViewServiceRequest() {
  let navigate=useNavigate();
  let params=useParams();
	const [posts, setPosts] = useState([])
	const HandleClick=()=>{
		
		navigate('/AdminRequestList')
	}
  useEffect(() => {
		//Access data from local server
		//console.log({params})
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
	  },[])
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

            <tr align="center">
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
              {post.Status}
              </td>
              <td align="right" class="mainLabel" width="20%">&nbsp;</td>
          </tr>
          
          <tr>
              <td align="right" class="mainLabel" width="30%">&nbsp;</td>
              <td align="left" class="mainLabel"  width="20%">
              Committed Date
              </td>
              <td align="left" class="mainLabel">
              {post.CommittedDate}
              </td>
              <td align="right" class="mainLabel" width="20%">&nbsp;</td>
          </tr>
    <tr>
              <td align="right" class="mainLabel" width="30%">&nbsp;</td>
              <td align="left" class="mainLabel"  width="20%">
              Completed Date
              </td>
              <td align="left" class="mainLabel">
              {post.CompletedDate}
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
      </div>
			))
		}
  </div>
  )
}
