//COMP229-PORTFOLIO
//Home page
//Luca Fusco
//301165312
//September 21, 2024
import { Link } from "react-router-dom";
import imgURL from '../img/penguin.gif';
const Home = () =>{
    return(
        <div className="homediv">
        <h1>Welcome To My Portfolio!</h1>
        <br />
        <br />
        <img src={imgURL} height={450}></img>

        <p>I want to succeed in learning multiple programming languages to a professional level and
         <br /> to take my skills and be able to use it efficiently one day. Below you will see the 
         <br /> about me page where you can learn more about who I am.
        </p>
        <button id="about" className="btn1"><Link to="/about">About me</Link></button>
        </div>
    );
};

export default Home;