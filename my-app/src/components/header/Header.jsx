import React from 'react'
import "./header.css"

function Header() {
  return (
    <div>
      
            <nav>
                <h2 class="logo"></h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    
                </ul>
                <button type="button">Login/Register</button>
            </nav>

        
    </div>
  )
}

export default Header
