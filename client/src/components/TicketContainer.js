import React from 'react'
import './TicketContainer.css'
import TicketCard from './TicketCard'

function TicketContainer({ tickets }) {
  let renderTickets = tickets.map((ticket) => {
    return <TicketCard key={ticket.id} ticket={ticket}/>
  })

  return (
    <div className='ticketContainer'>
      {renderTickets}
    </div>
  )
}

export default TicketContainer