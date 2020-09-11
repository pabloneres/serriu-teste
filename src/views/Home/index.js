import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom'


function Home() {
  const [redirect, setRedirect] = useState(false)
  const [user, setUser] = useState(false)
  
  useEffect(()=>{
    setUser(localStorage.getItem('user'))
  }, [])


  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    return 
  }

  if (redirect) {
    return <Redirect to="/signin" />
  }

  return (
    <>
    <h2>Olá {user} você está logado</h2>
    <Link onClick={handleLogout} > Sair </Link>
    </>
    );
}

export default Home;