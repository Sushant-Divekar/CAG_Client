// import React from 'react'
// import "./Navbar.scss"
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

// const Navbar = () => {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//         <div className='navbar'>
//             {/* <h1>Hello world</h1> */}
//             <div className='plogo'>
//                 {/* <p>hello</p> */}
//             </div>
//             <div className='content'>
//               <Link to='/'><h4>HOME</h4></Link>
//               <Link to='/selectoption'><h4>PREDICTION</h4></Link>
//               <Link to='/about'><h4>ABOUT</h4></Link>
//               <Link to='/contact'><h4>CONTACT</h4></Link>

//             </div>
//         </div>
      
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className='plogo'></div>
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='menu'>
        <Link to='/' onClick={toggleMenu}><h4>Home</h4></Link>
        <Link to='/selectoption' onClick={toggleMenu}><h4>Prediction</h4></Link>
        <Link to='/about' onClick={toggleMenu}><h4>About</h4></Link>
        <Link to='/contact' onClick={toggleMenu}><h4>Contact</h4></Link>
      </div>
    </div>
  );
};

export default Navbar;
