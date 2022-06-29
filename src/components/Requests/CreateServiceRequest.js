import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "../NavSide/Navbar";

export default function CreateServiceRequest() {

  const [Locations, setLocations]=useState([]);

    const [NewRequests, setNewRequests] = useState({Location:"", CubicalNo:"", Department:"", RequiredBy:"",Description:"",Justification:"", RequestId: 555555, Status:"Requested"})

    const handleChange = (e) => {
        setNewRequests({...NewRequests, [e.target.name]:e.target.value})
        
    }

    const handleSubmit = (e) => {
      e.preventDefault();
        axios.post("http://localhost:3001/NewRequests", NewRequests)
        .then((res)=>{
           console.log(res.data);
           alert('You have successfully submitted the data..!!')
        })
        
        .catch((err)=>{
          console.log(err.message)
        })
    }
    // useEffect(() => {
    //   axios
    //   .get(`http://localhost:3001/Requests`)
    //   .then((Response)=>
    //   setLocations(Response.data))
    //   .catch((err)=>{
    //       console.log(err)
    //   });

    // },[])

    useEffect(()=>{
      
      axios.get(`http://localhost:3001/Requests`)
      .then((res)=>{
        setLocations(res.data)
      })
      .catch((err)=>{
          console.log(err);
      })
      },[])

  return (
    <div>
        <Navbar/><br/>
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Create Service Request</h3>
            <div className="row">
            <label>Location:</label>
            <select  name= "Location" class="dept" required>
              <option value="">--Select--</option>
            {Locations.Location && Locations.Location.map((post) => (
              
             <option value={post.id}>{post.location}</option> 
              
               ))} 
            </select>
                <label>Cubical No:</label>
                <input type="number" name="CubicalNo" onChange={handleChange} autoComplete="off" required/>
            </div><br/>
                <div className="row">
                <label>	Department:</label>
                <select  name= "Department" onChange={handleChange} className="dept" required>
				  			   <option value="">--Select--</option>
				  			   {Locations.Department && Locations.Department.map((post) => (
              
              <option value={post.id}>{post.Department_Name}</option> 
               
                ))}
				  			   
			  		   </select>
                <label>Required By:</label>
                <input type="text" name="RequiredBy" onChange={handleChange} autoComplete="off" required/>
                </div><br/>
                <div className="row">
                <label>Request Type:</label>
                <select name="RequestType" className="dept1" onChange={handleChange} required>
			  				<option value=""> --Select--</option>
			  				{Locations.RequestsTypes && Locations.RequestsTypes.map((post) => (
              
              <option value={post.type}>{post.type}</option> 
               
                ))}
			          </select>
                <label>	Description:</label>
                <input type="text" name="Description" onChange={handleChange} autoComplete="off" required/>
                </div><br/>
                <div className="row">
                <label>Justification:</label>
                <input type="text" name="Justification" className="Justification" onChange={handleChange} autoComplete="off" required/><br/>
                <label>Status:</label>
                <input type="text" name="Status" className="Status" autoComplete="off" value={"Requested"} disabled/><br/>
                </div>
                
                
              
                <button type="submit" className="btn">Save</button>&nbsp;
                <button type="submit" className="btn1">close</button>
                
            </form>
        </div>
    </div>
  )
}