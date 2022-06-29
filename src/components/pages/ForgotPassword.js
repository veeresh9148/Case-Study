import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { VscEye } from "react-icons/vsc";
import axios from "axios";
import "./style.css"

export default function ForgotPassword() {
    const initialValues = { email: "", password: "", SecreteQuestion:"", SecreteAnswer:"" };
    //states
    const [formValues, setFormValues] = useState(initialValues);
    const [password, setPassword]=useState('');
    //errors
    const [formErrors, setFormErrors] = useState({});
    const [post, setPost]=useState([])
    const [isSubmit, setIsSubmit] = useState(false);
  let emailId, secretequestion, secreteanswer;
  
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
     Auth(formValues)
     
    };
  
    useEffect(() => {
      //console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        //console.log(formValues);
      }
      
    });
    const Auth = (values) => {
      
      axios.get(`http://localhost:3001/details?email=${values.email}`)
      .then(res=>{
          console.log(res.data)
        setPost(res.data)})
      .catch(err=>console.log(err)) 
      post.map((pt) => (
        emailId = pt.email,
        secretequestion = pt.secretequestion,
        secreteanswer = pt.SecreteAnswer,
        console.log(pt.email)
      ))
      
      if(values.email === emailId && values.SecreteQuestion === secretequestion && values.SecreteAnswer === secreteanswer){
        //alert("hi")
         console.log("first")
         axios.patch(`http://localhost:3001/details?email=${emailId}`, {password:password})
         .then(res=>{console.log(res.data)})
         .catch(err=>{console.log(err)})
       }else{
         alert("hi")
       }
    }
  
    //Show Password
    function myFunction() {
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
      //const email;
      const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const passregx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
       
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
      }else{
        setPassword(values.password)
      }
       if (!values.cpassword) {
        errors.cpassword = "Confirm Password is required";
      } else if (values.password !== values.cpassword) {
        errors.cpassword = "password & confirm password must be same";
      }
       if (!values.SecreteQuestion) {
        errors.SecreteQuestion = "Secrete Question is Required";
      }
       if (!values.SecreteAnswer) {
        errors.SecreteAnswer = "Secrete Answer is Required";
      }
      //console.log(emailId)
      
      return errors; 
    }
  return (
    <div>
     
        <div className="container-fluid">
        
      {/* <center>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui-message-success">Registered Successfully</div>
        ) :null} */}
      {/* </center> */}
      <h2>Service Request Management</h2>

      <form onSubmit={handleSubmit}>
        <h2>Forgot Password Form</h2>
        <div className="ui form">
     
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
          </div><br/>

          <div className="field">
            <label className="inputdata">Secrete Question
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.SecreteQuestion}</font></label>
            <input
              type="text"
              name="SecreteQuestion"
              autoComplete="off"
              placeholder="Secrete Question"
              values={formValues.SecreteQuestion}
              onChange={handleChange}
            />
          </div><br/>

          <div className="field">
            <label className="inputdata">Secrete Answer
            <font style={{color:"red"}}>*&nbsp;&nbsp;{formErrors.SecreteAnswer}</font></label>
            <input
              type="Text"
              name="SecreteAnswer"
              placeholder="Secrete Answer"
              autoComplete="off"
              values={formValues.SecreteAnswer}
              onChange={handleChange}
            />
           
          </div><br/>

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
          </div><br/>

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
              values={formValues.cpassword}
              onChange={handleChange}
              id="myInput1"
            />
          </div><br/>

          <button className="" >Submit</button>
        </div><br/>
        Click Here &nbsp;<Link to="/" id="welcome">
         Back
      </Link>
      </form>
      </div>
    </div>
  )
}
