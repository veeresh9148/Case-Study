import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CompletedViewServiceRequest from '../Requests/CompletedViewServiceRequest';
import AssignedViewServiceRequest from '../Requests/AssignedViewServiceRequest';
import CancelledViewServiceRequest from '../Requests/CancelledViewServiceRequest';
import RejectedViewServiceRequest from '../Requests/RejectedViewServiceRequest';
import RequestedViewServiceRequest from '../Requests/RequestedViewServiceRequest';
import Navbar from '../NavSide/Navbar'

export default function EmployeePage() {
  let params=useParams();
  const [posts, setPost] = useState([]);
  useEffect(() => {
    //Access data from local server
    console.log({params})
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
        <Navbar/><br/>
        { posts.map((post) => {
          if(post.Status === "Completed"){
            return <CompletedViewServiceRequest/> 
          }else if(post.Status === "Cancelled"){
            return <CancelledViewServiceRequest/> 
          }else if(post.Status === "Rejected"){
            return <RejectedViewServiceRequest/> 
          }else if(post.Status === "Assigned"){
            return <AssignedViewServiceRequest/> 
          }else if(post.Status === "Requested"){
            return <RequestedViewServiceRequest/> 
          }

                   
        })
            }
    </div>
  )
}