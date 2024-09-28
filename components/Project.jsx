//Project page
//Luca Fusco
//301165312
//September 21, 2024

import { Link } from "react-router-dom";

const Project = () =>{
    return(
        <div className="projectdiv">
        <h1>My projects</h1>
        <br />
        <h2>Clothes Repository</h2>
        <img src="./img/wardobe.jpg" height={350} width={550}></img><br></br>
        <img src="./img/stock.jpg" height={350} width={550}></img>
        <br />
        <p>This project was done with java and spring boot framework. It was a solo project and it utilizes ArrayLists
        <br />and registration functions. This also works with h2 database to store information and use CRUD operations.
        </p>
        <br />
        
        <h2>Movie search system</h2>
        <img src="./img/transformers.jpg" height={550} ></img>
        <img src="./img/brba.jpg" height={550} ></img><br />
        <p>This movie search system was a system I created using React native and IOS features. The information
        <br /> , images and rating system was all taken from an api, uses useState to create the search bar and search for a movie
        </p>
        <br />

        <h2>Email System</h2>
        <img src="./img/email.jpg" height={550} ></img>
        <p>This Email system was done using python and Django framework. This was also a solo project that utilizes smtp library.
        <br />You are able to send emails through this system using a google api key, you can send this email to multiple people and add files.
        <br />You also have to register an account so be able to send one.
        </p>
        <br />

        </div>
    );
};

export default Project;