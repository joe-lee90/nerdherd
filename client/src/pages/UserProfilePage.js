import React from 'react'
import './UserProfilePage.css'
import { useState, useEffect } from 'react'
import TicketContainer from '../components/TicketContainer'

function UserProfilePage() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('/tickets')
    .then((res) => res.json())
    .then((data) => setTickets(data))
  })

  return (
    <div>
      <TicketContainer tickets={tickets} />
    </div>
  )
}

export default UserProfilePage

