import React from 'react'
import './TicketCard.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react'
import Moment from 'moment'

function TicketCard({ ticket }) {
  const [myEvent, setMyEvent] = useState({})

  useEffect(() => {
    fetch(`/myEvent/${ticket.event_id}`)
    .then((res) => res.json())
    .then((data) => setMyEvent(data))
  })

  console.log(myEvent)

  return (
    <div className='ticket'>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{myEvent.name} - {Moment.parseZone(myEvent.date).format('MM-DD-YY,  LT')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           ${myEvent.price}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default TicketCard