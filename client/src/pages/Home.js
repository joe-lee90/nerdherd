import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'

function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/events')
    .then((res) => res.json())
    .then((data) => setEvents(data))
  })

  console.log(events)

  return (
    <div>Home</div>
  )
}

export default Home