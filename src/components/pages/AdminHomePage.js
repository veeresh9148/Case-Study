import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Login"

export default function AdminHomePage() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    //Access data from local server
    axios
    .get(`http://localhost:3001/details`)
    .then((Response)=>setPost(Response.data))
       console.log(Response)
    .catch((err)=>{
        console.log(err)
    },[]);
  })

  return (
    <div>
        <h1>AdminHomePage</h1>
        {posts.length
            ? posts.map((post) => (
                <div className="grid-item">
                  id: {post.id} 
                   {post.body}
                </div>
              ))
            : null}
    </div>
  )
}
