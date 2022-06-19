import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import EventContainer from '../components/EventContainer'

function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/events')
    .then((res) => res.json())
    .then((data) => {
      setEvents(data)
      document.title = "nerdherd: Buy tickets for eSports and other nerdcore events!"})
  }, [])

  return (
    <div>
      Home
      <EventContainer events={events} />
    </div>
  )
}

export default Home