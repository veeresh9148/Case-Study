import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "../NavSide/Navbar";
import { Link } from "react-router-dom";

export default function CreateServiceRequest() {

  const [Locations, setLocations]=useState([]);
 
    const [NewRequests, setNewRequests] = useState({Location:"", CubicalNo:"", Department:"", RequiredBy:"",Description:"",Justification:"", RequestId: Math.random(), Status:"Requested"})
    const [Errors, setErrors] = useState({})
    const handleChange = (e) => {
        setNewRequests({...NewRequests, [e.target.name]:e.target.value})
        
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(NewRequests));
        
    }
    

    useEffect(()=>{
      
      axios.get(`http://localhost:3001/Requests`)
      .then((res)=>{
        setLocations(res.data)
      })
      .catch((err)=>{
          console.log(err);
      })
      },[])

      const validate = (values) => {
        const errors = {};
        if(!values.Location){
          errors.Location = "Location is Required"
        }
         if(!values.CubicalNo){
          errors.CubicalNo = "Cubical No is Required"
        }
        
        if(!values.Department ){
          errors.Department  = "Department  is Required"
        }
        
        if(!values.RequiredBy){
          errors.RequiredBy = "Required By is Required"
        }
        
        if(!values.RequestType){
          errors.RequestType = "Request Type is Required"
        }

        if(!values.Description){
          errors.Description = "Description is Required"
        }
        if(!values.Justification){
          errors.Justification = "Justification is Required"
        }
        else{
        axios.post("http://localhost:3001/NewRequests", NewRequests)
        .then((res)=>{
           console.log(res.data);
           alert('You have successfully submitted the data..!!')
        })
        
        .catch((err)=>{
          console.log(err.message)
        })
      }
      return errors;
      }

  return (
    <div>
        <Navbar/><br/>
        <div className="form">
            
            <h3>Create Service Request</h3>
            <div className="row">
            <label>Location:<font style={{color:"red"}}>*&nbsp;&nbsp;{Errors.Location}</font></label>
            <select  name="Location" className="dept" onChange={handleChange}>
              <option value={NewRequests.Location}>--Select--</option>
            {Locations.Location && Locations.Location.map((post) => (
              
             <option value={post.location}>{post.location}</option> 
              
               ))} 
            </select>
                <label>Cubical No:<font style={{color:"red"}}>*&nbsp;&nbsp;{Errors.CubicalNo}</font></label>
                <input type="number" name="CubicalNo" onChange={handleChange} autoComplete="off" values={NewRequests.CubicalNo}/>
            </div><br/>
                <div className="row">
                <label>	Department:<font style={{color:"red"}}>*&nbsp;&nbsp;{Errors.Department}</font></label>
                <select  name= "Department" onChange={handleChange} className="dept">
				  			   <option values={NewRequests.Department}>--Select--</option>
				  			   {Locations.Department && Locations.Department.map((post) => (
              
              <option value={post.id}>{post.Department_Name}</option> 
               
                ))}
				  			   
			  		   </select>
                <label>Required By:<font style={{color:"red"}}>*&nbsp;&nbsp;{Errors.RequiredBy}</font></label>
                <input type="text" name="RequiredBy" onChange={handleChange} autoComplete="off" values={NewRequests.RequiredBy}/>
                </div><br/>
                <div className="row">
                <label>Request Type:<font style={{color:"red"}}>*&nbsp;&nbsp;{Errors.RequestType}</font></label>
                <select name="RequestType" className="dept1" onChange={handleChange}>
			  				<option values={NewRequests.RequestType}> --Select--</option>
			  				{Locations.RequestsTypes && Locations.RequestsTypes.map((post) => (
              
              <option value={post.type}>{post.type}</option> 
               
                ))}
			          </select>
                <label>	Description:<font style={{color:"red"}}>*&nbsp;&nbsp;{Errors.Description}</font></label>
                <input type="text" name="Description" onChange={handleChange} values={NewRequests.Description} autoComplete="off" required/>
                </div><br/>
                <div className="row">
                <label>Justification:<font style={{color:"red"}}>*&nbsp;&nbsp;{Errors.Justification}</font></label>
                <input type="text" name="Justification" className="Justification" onChange={handleChange} values={NewRequests.Justification} autoComplete="off" required/><br/>
                <label>Status:</label>
                <input type="text" name="Status" className="Status" autoComplete="off" value={"Requested"} disabled/><br/>
                </div>
                
                
              
                <button type="submit" className="btn" onClick={handleSubmit}>Save</button>&nbsp;
                <Link to="/RequestList" id="RequestList"><button type="submit" className="btn1">close</button></Link>
                
           
        </div>
    </div>
  )
}




