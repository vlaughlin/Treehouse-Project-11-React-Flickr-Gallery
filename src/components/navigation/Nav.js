import React from 'react';


import { NavLink } from 'react-router-dom';

const Nav = props => (

// The <NavLink> component is a special version of the <Link> component.
//It adds the properties activeClassName and activeStyle to give styling options when the link matches the location URL.
  <nav className="main-nav">
         <ul>
           <li><NavLink exact to='/'>Search</NavLink></li>
           <li><NavLink to='/cats'>Cats</NavLink></li>
           <li><NavLink to='/dogs'>Dogs</NavLink></li>
           <li><NavLink to='/computers'>Computers</NavLink></li>
         </ul>
       </nav>

           );


export default Nav;
