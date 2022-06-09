 import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VscEye } from "react-icons/vsc";
import "./Register"
import "./style.css"
import axios from 'axios';

import { useState, useEffect } from "react";


function Login() {
  const initialValues = { email: "", password: "" };
  //states
  const [formValues, setFormValues] = useState(initialValues);

  //errors
  const [formErrors, setFormErrors] = useState({});

  //const [isSubmit, setIsSubmit] = useState(false);
 
  const [posts, setPost] = useState([]);
  const [err, setErr] = useState('')

  let navigate=useNavigate();

  const handleChange=(e)=>{
    //console.log(e.target);
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    //setPassword(e.target.value);
    //setEmail(e.target.value)
   // console.log(formValues);
  };
  //show password

  const myFunction=()=> {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
  };
 
  useEffect(() => {
    
    axios
    .get(`http://localhost:3001/details`)
    .then((Response)=>
    setPost(Response.data))
       //console.log(Response.data)
    .catch((err)=>{
        console.log(err)
        // setError(err.message);
    });
    
  })
  
  const validate = (values) => {
   
    
    const errors = {};
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passregx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!values.email) {
      errors.email = "Email Id is required";
    } else if (!emailregex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }else if(!values.password){
      errors.password = "Password is required";
    }else if(values.password.length <= 6){
      errors.password = "Password must be 6 characters";
    }else if(values.password.length > 10){
      errors.password = "Password cannot exceed more than 10 characters";
    }else if (!passregx.test(values.password)) {
      // errors.password = "Your password must contain at least one uppercase letter, one lowercase letter, one special character, one number ";
      alert("Your password must contain at least one uppercase letter, one lowercase letter, one special character, one number ");
    }else 
    {posts.map((post) => {
      let emailId = post.email;
      let  pass = post.password
    if(values.email===emailId && values.password===pass && post.rollno===1){
      navigate('./AdminHomePage')
      alert("You Are LoggedIn Successfully")
    }else if(values.email===emailId && values.password===pass && post.rollno===2) {
      navigate('./EmployeeHomePage')
      alert("You Are LoggedIn Successfully")
    }else {
      //alert('Please Enter Valid Details')
      setErr('Please Enter Valid Details')
    }
  })}
  
    return errors;
  
  };
  
  return (
    
    <div className="App">
      
      <h1>Service Request Management</h1><br/><br/>
      <p className='err'>{err}</p>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="ui">
          <div className="field">
            <label className="inputdata">Email Id
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.email}</font></label>
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              values={formValues.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div><br/>
          
          <div className="field">
            <label className='label'>Password
            <font style={{color:"red"}}>*&nbsp;</font>
            <VscEye onClick={myFunction} className="eye"/>
            <font style={{color:"red"}}> &nbsp;{formErrors.password}</font>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              values={formValues.password}
              onChange={handleChange}
              id="myInput"
              autoComplete="off"
            />
            
          </div><br/>
          <button className='button'>Submit</button>
        </div><br/>
        {/* New User? Click Here<Link to="/Register" id="Register"> Register</Link> */}
        
      
      </form>
     
    </div>
    
  );
}

export default Login