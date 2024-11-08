"use client"
import React, { useState } from "react"
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"
import Home from '../app/page';
import Projects from './Projects';
import Contact from '@/components/Contact';

const Navbar =()=>{
const [isMenuOpen ,SetIsMenuOpen] =useState(false)
const toggleMenu=()=>{
  SetIsMenuOpen(!isMenuOpen)
}

  return (
    <div className='container pt-8' >
        <div className='flex justify-between items-center'>
            <div className='text-x1 font-medium'> Faisal hameed</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menulink'><a href='#hero'>Home</a></li>
                <li className='menulink'><a href='#about'>About</a></li>
                <li className='menulink'><a href="#projects"> Projects</a></li>
                <li className='menulink'><a href="#skills">Skills</a></li>
                <li className='menulink'><a href="#contact">Contact</a></li>
            </ul>
            <div className="md:hidden"onClick={toggleMenu }>
               {isMenuOpen ? <AiOutlineClose size={30}/>:
               <AiOutlineMenu size={30} />
               }
            </div>


            {/* <AiOutlineMenu className='md:hidden' size={30} /> */}

        </div>
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 mt-4 md:hidden">
            <li className="menuLink">
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className="menuLink">
              <a href="#About" onClick={toggleMenu}>About</a>
            </li>
            <li className="menuLink">
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="menuLink">
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className="menuLink">
              <a href="#Contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )}
      
    </div>
  )
}
 
export default Navbar
