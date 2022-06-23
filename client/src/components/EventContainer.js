import React from 'react'
import EventCard from './EventCard'
import './EventContainer.css'

function EventContainer({ events, currentUser }) {
    let renderEvents = events.map((event) => {
        return <EventCard key={event.id} event={event} currentUser={currentUser}/>
    })
    
    return (
        <div className='eventContainer'>
            {renderEvents}
        </div>
    )
}

export default EventContainer