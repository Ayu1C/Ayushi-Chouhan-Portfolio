import "./NavbarStyles.css"
import Project from "./Project.js"
import About from "./About.js"
import Contact from "./Contact.js"
import {Link} from "react-router-dom"
import React, {useState} from 'react'

const Navbar = () => {

  const [color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100)
      setColor(true);
    else
      setColor(false);
  };

  window.addEventListener("scroll",changeColor);

  return (
    <div className= {color ? "header header-bg" : "header"}>
       <a href="/">
         <h1>Portfolio</h1>
       </a>
       <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
       </ul>
    </div>
  )
}

export default Navbar
