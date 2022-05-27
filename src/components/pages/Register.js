import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { VscEye } from "react-icons/vsc";
import axios from "axios";
import "./style.css"

function Register() {
  const initialValues = { FirstName: "", email: "", password: "", LastName:"", DateofBirth:"", cpassword:"", MobileNo:"", Address:"" };
  //states
  const [formValues, setFormValues] = useState(initialValues);

  //errors
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // setFormValues({ ...formValues, [e.target.name]:e.target.value})
    axios.post("http://localhost:3001/details", formValues)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err.message))
  };

  useEffect(() => {
    //console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(formValues);
    }
  });

  //Show Password
const myFunction=()=> {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//show confirm password
const myFunction1=()=> {
  var x = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
  function validate(values) {
    const errors = {};
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passregx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    //whitespace characters like -tab, form feed, and line feed ,will not match.
    const fnameregx = /^[a-zA-Z ]{2,30}$/;

    if (!values.DateofBirth) {
      errors.DateofBirth = "Date of Birth is required";
    }

    if (!values.email) {
      errors.email = "Email Id is required";
    } else if (!emailregex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 6) {
      errors.password = "Password must be 6 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (!passregx.test(values.password)) {
      //errors.password = "Your password must contain at least one uppercase letter, one lowercase letter, one special character, one number ";
      alert("Your password must contain at least one uppercase letter, one lowercase letter, one special character, one number ");
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "password & confirm password must be same";
    }

    if (!values.FirstName) {
      errors.FirstName = "First Name is Required";
    } else if (!fnameregx.test(values.FirstName)) {
      errors.FirstName = "This is not Valid Format";
    }

    if (!values.LastName) {
      errors.LastName = "Last Name Required";
    }

    if (!values.Address) {
      errors.Address = "Address is Required";
    }

    if (!values.MobileNo) {
      errors.MobileNo = "Mobile No is Required";
    }

    return errors;
  }
  return (
    <div>
        <div className="container-fluid">
      <center>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui-message-success">Registered Successfully</div>
        ) :null}
      </center>

      <form onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <div className="ui form">
        <div class="row">
        <div className="field">
            <label className="inputdata">First Name
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.FirstName}</font></label>
            <input
              type="text"
              name="FirstName"
              autoComplete="off"
              placeholder="First Name"
              values={formValues.FirstName}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <label className="inputdata">Last Name
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.LastName}</font></label>
            <input
              type="text"
              name="LastName"
              autoComplete="off"
              placeholder="Last Name"
              values={formValues.LastName}
              onChange={handleChange}
            />
          </div>
          </div><br/>
          <div className="row">
          <div className="field">
            <label className="inputdata">Mobile No
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.MobileNo}</font></label>
            <input
              type="text"
              name="MobileNo"
              maxLength={10}
              autoComplete="off"
              placeholder="Mobile No"
              values={formValues.username}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <label className="inputdata">Email Id
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.email}</font></label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email Id"
              values={formValues.email}
              onChange={handleChange}
            />
          </div>
          </div><br/>
          <div className="row">
          <div className="field">
            <label className="inputdata">Address
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.Address}</font></label>
            <input
              type="text"
              name="Address"
              autoComplete="off"
              placeholder="Address"
              values={formValues.username}
              onChange={handleChange}
            />
            <i class="fa fa-eye showpwd" onClick="showPwd('passwd', this)"></i>
          </div>

          <div className="field">
            <label className="inputdata">Date of Birth
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.DateofBirth}</font></label>
            <input
              type="date"
              name="DateofBirth"
              placeholder="Date of Birth"
              autoComplete="off"
              values={formValues.username}
              onChange={handleChange}
            />
           
          </div>
          </div><br/>
          <div className="row">
          <div className="field">
            <label className="inputdata">Password
            <font style={{color:"red"}}>*&nbsp;</font>
            <VscEye onClick={myFunction} className="eye"/>
            <font style={{color:"red"}}> &nbsp;{formErrors.password}</font>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              values={formValues.password}
              onChange={handleChange}
              id="myInput"
            />
          </div>

          <div className="field">
            <label className="inputdata">Confirm Password
            <font style={{color:"red"}}>*&nbsp;</font>
            <VscEye onClick={myFunction1} className="eye"/>
            <font style={{color:"red"}}> &nbsp;{formErrors.cpassword}</font>
            </label>
            <input
              type="password"
              name="cpassword"
              autoComplete="off"
              placeholder="Confirm Password"
              values={formValues.email}
              onChange={handleChange}
              id="myInput1"
            />
          </div>
          </div><br/>
          <button className="btn">Submit</button>
        </div><br/>
        Already Account ? Click Here<Link to="/" id="welcome">
         Sign In
      </Link>
      </form>
      </div>
    </div>
  );
}

export default Register;
