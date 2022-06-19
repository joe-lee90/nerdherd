import React from 'react'
import EventCard from './EventCard'
import './EventContainer.css'

function EventContainer({ events }) {
    let renderEvents = events.map((event) => {
        return <EventCard key={event.id} event={event}/>
    })
    
    return (
        <div className='eventContainer'>
            {renderEvents}
        </div>
    )
}

export default EventContainer