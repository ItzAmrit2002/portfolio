import React, { useEffect } from 'react'
import './Navbar.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Link} from 'react-scroll'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";

const squareVariants = {
    visible: { opacity: 1, y: 0, transition: {delay:0.2, duration: 1 } },
    hidden: { opacity: 0, y: "-100%"}
  };
const Navbar = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if(!inView)
      {
        controls.start("hidden");
      }
    }, [controls, inView]);
  return (

        <div className="navbar">
    
      <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants}
    >
        <span className='navbar__resume'>
            <h4 className='portfolio'>Portfolio</h4>
        </span>
        </motion.div>

        <div>
            <ul className={showMediaIcons? "navbar__container active" : "navbar__container"}>
                {showMediaIcons && <li id='cross'>
                    <FaRegWindowClose size={28} onClick={() => setShowMediaIcons(!showMediaIcons)}/>
                </li>}
                <li>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={750}>Home</Link>
                    <div className='bar'></div>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={750}>About</Link> 
                    <div className='bar'></div>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={-10} duration={750}>Projects</Link>
                    <div className='bar'></div>
                </li>
                {showMediaIcons && <li>
                    <Link to="contact" spy={true} smooth={true} offset={-10} duration={750}>Contact</Link>
                    <div className='bar'></div>
                </li>}
                
            </ul>
            
        </div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu size={28}/>
            </a>
          </div>

        <span className='contact_span'>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={750}><h4 className='c_button'>Contact</h4></Link>
            
        </span>
        </div>
    
  )
}

export default Navbar