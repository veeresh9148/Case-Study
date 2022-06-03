import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import "./Login"

export default function Adminoldpage() {
  let params=useParams();
  const [posts, setPost] = useState([]);
  // const [error, setError] = useState([]);
  const [id, setId] = useState([])
  useEffect(() => {
    //Access data from local server
    console.log({params})
    axios
    .get(`http://localhost:3001/NewRequests?id=${params.id}`)
    .then((Response)=>
    setPost(Response.data),
    setId(Response.id))
       //console.log(Response.data)
    .catch((err)=>{
        console.log(err)
        // setError(err.message);
    });
  },[params.id])

  return (
    <div>
        <h1>Adminoldpage</h1>
        { posts.map((post) => (
                <div className="grid-item" key={post.id}>
                  id: {post.id} 
                   
                </div>
              ))
            }
    </div>
  )
}