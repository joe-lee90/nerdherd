import React from 'react'
import './UserProfilePage.css'
import { useState, useEffect } from 'react'
import TicketContainer from '../components/TicketContainer'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

function UserProfilePage({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('/mytix')
    .then((res) => res.json())
    .then((data) => setTickets(data))
  })

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
    .then(() => {
      setCurrentUser(null)
      console.log('Logging out')
      navigate('/')})
  }

  return (
    <div className='profilePage'>
      Currently logged in as: {currentUser.username}
      <TicketContainer tickets={tickets} />
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
    </div>
  )
}

export default UserProfilePage