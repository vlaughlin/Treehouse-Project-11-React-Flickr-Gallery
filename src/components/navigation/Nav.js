import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render () {
    return (

  <nav className="main-nav">
         <ul>
           <li><NavLink exact to='/'>Search</NavLink></li>
           <li><NavLink to='/cats'>Cats</NavLink></li>
           <li><NavLink to='/dogs'>Dogs</NavLink></li>
           <li><NavLink to='/computers'>Computers</NavLink></li>
         </ul>
       </nav>



           );
         }
       }

export default Nav;
