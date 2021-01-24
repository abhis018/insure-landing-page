import React from 'react';
import './Navigation.css';
import logo from './logo.svg';

const Navigation = () => {
    return (
        <div className="navigate">
           <img className="img" src={logo}/> 
           <ul className="ul">
               <li className="li">HOW WE WORK</li>
               <li className="li">BLOG</li>
               <li className="li">ACCOUNT</li>
               <button className="li grow">VIEW PLANS</button>
           </ul>
        </div> 
    )
}

export default Navigation;