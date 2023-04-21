import React from 'react'
import "./header.css"
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();

  return (

    <div>
      
            <nav>
                <h2 className='logo'></h2>
                <ul>
                    <li  onClick={()=>navigate(`/`)} style={{cursor: "pointer"}}><a>Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    
                </ul>
                <button type="button" onClick={()=>navigate(`/login`)}>Login/Register</button>
            </nav>

        
    </div>
  )
}

export default Header
