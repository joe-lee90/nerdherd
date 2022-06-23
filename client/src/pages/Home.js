import React from 'react'
import './Home.css'
import EventContainer from '../components/EventContainer'

function Home({ events, currentUser }) {
  

  return (
    <div>
      <EventContainer events={events} currentUser={currentUser}/>
    </div>
  )
}

export default Home