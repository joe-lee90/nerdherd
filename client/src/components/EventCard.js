import React from 'react'
import './EventCard.css'

function EventCard({ event }) {
  return (
    <div>
        <img src={event.image} alt={event.name}/>
        <h1>{event.name}</h1>
        <h1>{event.game}</h1>
        <h2>{event.date}</h2>
        <h3>{event.location}</h3>
        <h3>{event.description}</h3>
        <h3>{event.sponors}</h3>
        <h4>${event.price}</h4>
    </div>
  )
}

export default EventCard