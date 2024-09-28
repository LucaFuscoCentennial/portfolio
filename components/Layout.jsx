//Layout page
//Luca Fusco
//301165312
//September 21, 2024

import { Link } from "react-router-dom";

export default function Layout(){
    return(
        <nav className="navb">
        <Link to="/"><a className="logo">LF</a></Link>
        <Link to="/" >Home</Link> 
        <Link to="/about" >About</Link>
        <Link to="/project" >Projects</Link>
        <Link to="/services" >Services</Link>
        <Link to="/contact" >Contact Us</Link>

        </nav>
       
    );
}