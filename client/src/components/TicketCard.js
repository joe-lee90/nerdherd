import React from 'react'
import './TicketCard.css'

function TicketCard({ ticket }) {
  return (
    <div>
      <h1>{ticket.active}</h1>
      <h2>{ticket.user_id}</h2>
      <h2>{ticket.event_id}</h2>
    </div>
  )
}

export default TicketCard