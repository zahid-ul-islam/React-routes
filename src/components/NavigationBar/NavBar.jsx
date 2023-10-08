import React from 'react'
import { Link } from 'react-router-dom'
import "./navBar.css" 

function NavBar() {
  return (
    <>
    <div className='navLink'>
         <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/contact"}>Contact</Link>
    </div>
   
    </>
    
  )
}

export default NavBar