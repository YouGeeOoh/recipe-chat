import React from 'react'

function Header({icon, title}) {
  return (
    <>
    
    <header>
        <img src={icon} alt='chefIcon'/> 
        {title}
    </header>
    </>
  )
}

export default Header