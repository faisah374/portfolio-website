"use client"
import React, { useState } from "react"
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"
import "../app/styles/navbar.css"



const Navbar =()=>{
const [isMenuOpen ,SetIsMenuOpen] =useState(false)
const toggleMenu=()=>{
  SetIsMenuOpen(!isMenuOpen)
}

  return (
    <div className='navbar-container' >
        <div className='navbar-link'>
            <div className='navbar'> </div>
            <ul className='navbar'>
                <li className='navbar-link'><a href='#hero'>Home</a></li>
                <li className='navbar-link'><a href='#about'>About</a></li>
                <li className='navbar-link'><a href="#projects"> Projects</a></li>
                <li className='navbar-link'><a href="#skills">Skills</a></li>
                <li className='navbar-link'><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-menu-icon"onClick={toggleMenu }>
               {isMenuOpen ? <AiOutlineClose size={30}/>:
               <AiOutlineMenu size={30} />
               }
            </div>


            {/* <AiOutlineMenu className='md:hidden' size={30} /> */}

        </div>
        {isMenuOpen && (
          <ul className="navbar-menu">
            <li className="navbar-link">
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className="navbar-link">
              <a href="#About" onClick={toggleMenu}>About</a>
            </li>
            <li className="navbar-link">
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="navbar-link">
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className="navbar-link">
              <a href="#Contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )}
      
    </div>
  )
}
 
export default Navbar
