import React, {useState} from "react";
import axios from "axios";

export default function CreateServiceRequest() {
    const [NewRequests, setNewRequests] = useState({Location:"", CubicalNo:"", Department:"", RequiredBy:"",Description:"",Justification:""})

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

  return (
    <div>
        
        <div>
            <form onSubmit={handleSubmit}>
            <h3>Create Service Request</h3>
            <div className="row">
            <label>Location:</label>
            <select  name= "Location" class="dept">
              <option value="0">--Select--</option>
              <option value="1">BLR-SER1</option>
              <option value="2">BLR-SER2</option>
              <option value="3">BLR-BTR1</option>
              <option value="4">BLR-BTR2</option>
              <option value="5">CHN-PGR1</option>
              <option value="6">CHN-PGR2</option>
              <option value="7">CHN-PGR3</option>
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