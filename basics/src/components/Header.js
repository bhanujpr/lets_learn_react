import React from 'react'
import { Link } from 'react-router-dom';

function Title() {
  return (
    <a href='/'>
      <img 
      className='logo'
      alt='logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYm8lAGJ3xhJtR97fPwyWwPce0uMOFXdRiQ&usqp=CAU'/>
     
    </a>
  )
}


const Header =()=>{
  return(
      <div className='navbar'>
        <Title/>
       <ul >
       <li>
          <Link to="/">Home</Link>
      </li>
      <li>
          <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
          <li>Cart</li>
      </ul>
      </div>
  )
}

export default Header;