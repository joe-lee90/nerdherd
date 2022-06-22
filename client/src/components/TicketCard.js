import React from 'react'
import './TicketCard.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TicketCard({ ticket }) {
  return (
    <div className='ticket'>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Event name and date</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           QR CODE and other ticket details
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default TicketCard