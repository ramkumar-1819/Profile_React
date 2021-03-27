import React from 'react';
import Contact from './Contact/Contact.jsx';
import About from './About/About.jsx';
import Header from'./Headers.jsx';
import './App.css'

import {BrowserRouter as Router,
        Switch,
        Route,
        Link
        } from 'react-router-dom'

class App extends React.Component{

       render(){
           return(<div className="main">
               <div className="head">
                   Ramkumar T<br/>B.E Computer Science and Engineering<br/>Chennai
               </div>
               <Router>
                   <div className="navigation">
                    <Header/>
                    </div>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                   </Switch>
               </Router>
               </div>
           )
       }

}
export default App


