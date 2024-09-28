//contact page
//Luca Fusco
//301165312
//September 21, 2024
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () =>{
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    const handleFname = (event) =>{
        setFname(event.target.value);
    }
    const handleLname = (event) =>{
        setLname(event.target.value);
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }

    const nav = useNavigate();

    function navigate (){
        nav("/")
    }

    function confirmation (){
        alert("Thank you for submitting "+ fname + " " + lname + ". We will email you at: " + email)
    }

    return(
        <div className="contclass">
          <h1>Contact us</h1> 
          <br />
          <div className="card1">
          <p>Please enter your information if you wish to contact me! I will respond 
            <br />within 24 hours
          </p>
          <br /> 
         <p>First name: </p><input type="text" value={fname} onChange={handleFname}></input><br />
         <p>Last name: </p><input type="text" value={lname} onChange={handleLname}></input>
         <p>Email: </p><input type="text" value={email} onChange={handleEmail}></input>
         <br /><br />
         <button className="btn1" onClick={() => {confirmation(); navigate()}}>Submit</button>
          </div>
          

        </div>
    );
};

export default Contact;