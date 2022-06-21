import React from 'react'
import './UserProfilePage.css'
import { useState, useEffect } from 'react'
import TicketContainer from '../components/TicketContainer'

function UserProfilePage({ setUser }) {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('/tickets')
    .then((res) => res.json())
    .then((data) => setTickets(data))
  })

  // const handleLogout = () => {
  //   fetch("/logout?" + new URLSearchParams({ username: user.username }), {
  //     method: "DELETE",
  //   })
  //   .then(() => setUser(null))
  // }

  return (
    <div>
      <TicketContainer tickets={tickets} />
    </div>
  )
}

export default UserProfilePage