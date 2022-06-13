import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdminCompletedViewServiceRequest from '../Requests/AdminCompletedViewServiceRequest';
import AdminAssignedViewServiceRequest from '../Requests/AdminAssignedViewServiceRequest';
import AdminCancelledViewServiceRequest from '../Requests/AdminCancelledViewServiceRequest';
import AdminRejectedViewServiceRequest from '../Requests/AdminRejectedViewServiceRequest';
import AdminRequestedViewServiceRequest from '../Requests/AdminRequestedViewServiceRequest';
import AdminNavbar from '../NavSide/AdminNavbar'

export default function Adminoldpage() {
  let params=useParams();
  const [posts, setPost] = useState([]);
  useEffect(() => {
    //Access data from local server
    
    axios
    .get(`http://localhost:3001/NewRequests?id=${params.id}`)
    .then((Response)=>
    setPost(Response.data))
       //console.log(Response.data)
    .catch((err)=>{
        console.log(err)
        // setError(err.message);
    });
  })

  return ( 
    <div>
        <AdminNavbar/><br/>
        { posts.map((post) => {
          if(post.Status === "Completed"){
            return <AdminCompletedViewServiceRequest/> 
          }else if(post.Status === "Cancelled"){
            return <AdminCancelledViewServiceRequest/> 
          }else if(post.Status === "Rejected"){
            return <AdminRejectedViewServiceRequest/> 
          }else if(post.Status === "Assigned"){
            return <AdminAssignedViewServiceRequest/> 
          }else if(post.Status === "Requested"){
            return <AdminRequestedViewServiceRequest/> 
          }

                   
        })
            }
    </div>
  )
}