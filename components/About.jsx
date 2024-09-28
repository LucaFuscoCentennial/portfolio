//About page
//Luca Fusco
//301165312
//September 21, 2024
import { Link } from "react-router-dom";

const About = () =>{
    return(
        <div className="aboutdiv">
        <h1>About me</h1>
        <h3>Luca Fusco</h3>
        <img src="img/Luca.jpg" height={400} width={300}></img>
        <p>Hello, I am Luca Fusco, I am a current student at Centennial College and I am in the 
        <br />third semester. Some of my hobbies are liking video games, watching sports, playing  
        <br />golf and learning languages. I am currently learning Japanese! I am looking to continously
        <br />learn more about various coding languages and hope to make use of and bring my skills to 
        <br />the table one day.  
        </p>
        <button className="btn1"><Link to="https://drive.google.com/file/d/1k-MWL5r5pcVv8lqGqd9pIwB_TKxet8Np/view?usp=sharing">View Resume</Link></button>
        </div>
    );
};

export default About;


