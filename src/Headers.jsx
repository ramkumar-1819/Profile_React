import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    
    render(){
        return(<>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </>)
    }
}
export default Header