import React from 'react'
import  Logout from './Logout';



const Header = () => {
 
  return (
    <div >
    <header >
      <div className='first'>
        <h2>Inventory</h2>
        </div>
      <div className='last'><Logout></Logout></div>
    </header>
    
    </div>
  )
}

export default Header


