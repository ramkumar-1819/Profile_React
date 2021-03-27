import React from 'react';
import './About.css'
class About extends React.Component{
    render(){
        return(<div className="about">
            <pre>Name                      : Ramkumar T</pre>
            <pre>Age                       : 22</pre>
            <pre>D.O.B                     : 21/10.1999</pre>
            <pre>Educational Qualification : SSLC - Sambaviga.Hr.Sec.School, Percentage-97.5</pre>
            <pre>                            HSC  - Sambaviga.Hr.Sec.School, Percentage-94.5</pre>
            <pre>                            UG   - Jeppiaar Engineering College, CGPA-7.8</pre>
            <pre>Technical Knowledge       : Python,MERN Stack.</pre>
            <pre>Projects                  : Machine Learning - Email Spam Detection using Deep Neural Network.</pre>
            <pre>                            WebApplication   - Movie Ticket Booking using HTML,CSS,JS.</pre>
            <pre>Location                  : Chennai.</pre>
        </div>)

    }
}
export default About