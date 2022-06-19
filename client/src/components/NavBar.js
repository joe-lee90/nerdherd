import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  return (
    <div>
        <img id='nerdherdLogo' src='/nerdherd_logo.png' alt='nerdherd_logo' onClick={handleHomeClick}/>
        <img src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' alt='profile' onClick={handleProfileClick}/>
    </div>
  )
}

export default NavBar