//COMP229-PORTFOLIO
//Services page
//Luca Fusco
//301165312
//September 21, 2024
import java from '../img/java.png';
import mobile from '../img/mobile.jfif';
import python from '../img/python.png';
import sql from '../img/sql.jpg';


const Services = () =>{
    return(
        <div className="servclass">
            <h1>Services I provide</h1>

            <br />
            <br />
            <h3>Java programming</h3>

            <img src={java}></img>
            <p>I provide skills with Java programming with knowledge of frameworks like Spring boot</p>
            <br />

            <h3>Mobile Development</h3>
            <img src={mobile} height={250}></img>
            <p>I provide skills in mobile app development on android and ios using frameworks such as react native</p>
            <br />

            <h3>Python and django</h3>
            <img src={python} height={250}></img>
            <p>Have knowledge in Python programming and frameworkds such as django</p>

            <br />

            <h3>Database programming</h3>
            <img src={sql} height={250}></img>
            <p>I provide skills in Database programming using databases like oracle for sql and pl/sql</p>

        </div>
    );
};

export default Services;