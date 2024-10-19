
//COMP229-PORTFOLIO
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
  <form className="contclass" onSubmit={() => {confirmation(); navigate()}}>
          <h1>Contact us</h1> 
          <div className="myinfo">
            <h3>My contact information</h3>

            <p>Email: lucafusco9@hotmail.com</p>
            <p>Phone number: 416-963-8937</p>
        </div>
          <br />
          <div className="card1">
          <p>Please enter your information if you wish to contact me! I will respond 
            <br />as soon as I can
          </p>
          <br /> 
         <p>First name: </p><input type="text" value={fname} onChange={handleFname} required /><br />
         <p>Last name: </p><input type="text" value={lname} onChange={handleLname}required />
         <p>Phone Number: </p><input type="text" required />
         <p>Email: </p><input type="email" value={email} onChange={handleEmail} required/>
         <p>Message: </p> <textarea required></textarea>

         <p></p>
         <br /><br />
         <input type="submit"></input>
          </div>

        
        </form>

      
        
    );
};

export default Contact;