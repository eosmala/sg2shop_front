import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Logout({setUser}) {
  useEffect(() => {
    async function logout() {
      const config = {
        method: 'GET',
        credentials: 'include'
      }
  
      const url = 'http://localhost/sg2shop_back/register/logout.php';
      try {
        await fetch(url,config);
        setUser(null);
      } catch (error) {
        alert(error);
      }
    }
    logout();
  }, )


  return (
    <div>
      <p>You have logged out!</p>
      <Link to="/login">Sign in</Link>
    </div>
  )
}
