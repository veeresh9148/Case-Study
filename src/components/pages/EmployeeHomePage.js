import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function EmployeeHomePage() {
    const [post, setPost] = useState([])
    //const [id, setId] = useState()

    useEffect(()=>{
        axios
            .get(`http://localhost:3001/details`)
            .then((Response)=>setPost(Response.data))
            .catch((err)=>{
                console.log(err)
            });
    }, []);
  return (
    <div className="body">
        <h1>FetchData</h1>
        <div className="grid-container">
          {/* <input type="search" value={id} onChange={(e)=>setId(e.target.value)}/> */}
          <div class="grid-item">
          {/* Id:&nbsp;{post.id}<br/>
            Name:{post.FirstName}<br/>
            Age:{post.LastName}<br/>
            Position:{post.email} */}
            {post.length
            ? post.map((post) => (
                <div className="grid-item">
                  id: {post.id} 
                   {post.body}
                </div>
              ))
            : null}
          </div>
        </div>
    </div>
  )
}
