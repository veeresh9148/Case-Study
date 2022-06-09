import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "../NavSide/Navbar";

export default function CreateServiceRequest() {
  const [Status, setStatus]=useState();
  const [Locations, setLocations]=useState();
  const [Departments, setDepartments]=useState();
  const [RequestTypes, setRequestTypes]=useState();

    const [NewRequests, setNewRequests] = useState({Location:"", CubicalNo:"", Department:"", RequiredBy:"",Description:"",Justification:"", RequestId: 555555,})

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
    const StatusDetails=()=>{
      axios
      .get(`http://localhost:3001/Status`)
      .then((Response)=>
      setStatus(Response.data))
         //console.log(Response.data)
      .catch((err)=>{
          console.log(err)
          // setError(err.message);
      });
    }
    const LocationsDetails=()=>{
      
    }
    const DepartmentsDetails=()=>{
      axios
      .get(`http://localhost:3001/Department`)
      .then((Response)=>
      setDepartments(Response.data))
         //console.log(Response.data)
      .catch((err)=>{
          console.log(err)
          // setError(err.message);
      });
    }
    const RequestTypesDetails=()=>{
      axios
      .get(`http://localhost:3001/RequestsTypes`)
      .then((Response)=>
      setRequestTypes(Response.data))
         //console.log(Response.data)
      .catch((err)=>{
          console.log(err)
          // setError(err.message);
      });
    }
    useEffect(() => {
      axios
      .get(`http://localhost:3001/Location`)
      .then((Response)=>
      setLocations(Response.data))
         //console.log(Response.data)
      .catch((err)=>{
          console.log(err)
          //setError(err.message);
      });

    },[])

  return (
    <div>
        <Navbar/>
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Create Service Request</h3>
            <div className="row">
            <label>Location:</label>
            <select  name= "Location" class="dept">
              <option value="">--Select--</option>
            {Locations.map((post) => (
              
             <option value={post.id}>{post.location}</option> 
              
               ))} 
            </select>
                <label>Cubical No:</label>
                <input type="number" name="CubicalNo" onChange={handleChange} autoComplete="off"/>
            </div><br/>
                <div className="row">
                <label>	Department:</label>
                <select  name= "Department" className="dept" onChange={handleChange}>
				  			   <option value="0">Select</option>
				  			   <option value="1">Training</option>
				  			   <option value="2">HR</option>
				  			   <option value="3">Infrastructure</option>
				  			   <option value="4">Delivery</option>
			  		   </select>
                <label>Required By:</label>
                <input type="text" name="RequiredBy" onChange={handleChange} autoComplete="off"/>
                </div><br/>
                <div className="row">
                <label>Request Type:</label>
                <select name="RequestType" className="dept1" onChange={handleChange}>
			  				<option value="0"> Selected</option>
			  				<option value="1">Job Request</option>
			  				<option value="2">Software Request</option>
			  				<option value="3">Hardware Request</option>
			          </select>
                <label>	Description:</label>
                <input type="text" name="Description" onChange={handleChange} autoComplete="off"/>
                </div><br/>
                <label>Justification:</label>
                <input type="text" name="Justification" className="Justification" onChange={handleChange} autoComplete="off"/><br/>
                <button type="submit" className="btn">Save</button>&nbsp;
                <button type="submit" className="btn1">close</button>
            </form>
        </div>
    </div>
  )
}