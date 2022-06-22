import React from 'react'
import './Home.css'
import EventContainer from '../components/EventContainer'

function Home({ events }) {
  

  return (
    <div>
      <EventContainer events={events} />
    </div>
  )
}

export default Home