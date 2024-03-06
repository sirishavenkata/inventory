import React from 'react'
import { Button,Icon } from 'semantic-ui-react';


const Logout = () => {
    const handleLogout=()=>{
        localStorage.clear();
        window.location.href='/Login';
    }
  return (
    <div>
      <Button primary size='tiny' onClick={handleLogout}><Icon className='log out'></Icon></Button>
    </div>
  )
}

export default Logout;
