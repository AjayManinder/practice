import React, { useState, useEffect } from "react";
import "./Header.css";
import {  Link } from 'react-router-dom';
import GoToTop from "../Components/ScrollToTop";

const Header=()=>{

const [fix, setFix] = useState(false);

const [dropdownHead, setDropdownHead] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", setFixed);
    window.addEventListener('resize', headNavFix);
  }, []);

const headNavFix=()=>{
    if(window.innerWidth<=800){
        setDropdownHead(true);
    } else {
        setDropdownHead(false);
    }
}
console.log(window.innerWidth);

const setFixed=()=>{
  
    if(window.scrollY >=80){
        setFix(true);
    } else{
        setFix(false);
    }
};



    return(
       
        <div className={fix? "active" : "beforeScroll"} >
            
            <div className={fix? "mainHeadactive" : "mainHead"}>Main Heading</div>

        <div className="HeadNav">
      
       <ul>
        <li>
                <Link className="navLink" to="/">Home</Link>
                </li>
                <li>
                <Link className="navLink" to="/About">About Us</Link>
                </li>
                <li>
                <Link scrollY="0"  className="navLink" to="/contact"> contact </Link>
                </li>
                <li>
                <Link className="navLink" to="/ApiCalling"> ApiCalling </Link>
                </li>    
                </ul>

            </div>
            <GoToTop/>
            </div>
     
        
    )
}

export default Header;