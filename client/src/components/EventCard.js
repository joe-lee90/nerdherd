import React from 'react'
import './EventCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Moment from 'moment'

function EventCard({ event, currentUser }) {

  const handleBuy = (e) => {
    e.preventDefault()

    const data = {
      "active": true,
      "event_id": event.id,
      "user_id": currentUser.id
    }

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data)
      }

      fetch("/buy", configObj)
      .then((res) => res.json())
      .then((ticket) => console.log(ticket))
    }

  return (
    <Card className='eventCard' sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        maxheight="250"
        image={event.image}
        alt={event.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {event.game}
        </Typography>
        <Typography variant="h7" color="text.secondary">
        {Moment.parseZone(event.date).format('MM-DD-YY,  LT')} - {event.location}
        </Typography> 
        <Typography variant="body2" color="text.secondary"> 
          {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='buyButton' size="small" onClick={handleBuy}>${event.price} Buy</Button>
      </CardActions>
    </Card>
  )
}

export default EventCard