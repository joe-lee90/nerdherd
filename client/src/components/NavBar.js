import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  return (
    <div className="navbar">
        <img id='nerdherdLogo' src='/nerdherd_logo.png' alt='nerdherd_logo' onClick={handleHomeClick}/>
        <AccountCircleIcon onClick={handleProfileClick}/>
    </div>
  )
}

export default NavBar
