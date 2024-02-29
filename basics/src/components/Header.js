import React from 'react'

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
      </ul>
      </div>
  )
}

export default Header;