import { useState, useEffect } from "react";
import EventCard from "./eventCard";
import CardGroup from 'react-bootstrap/CardGroup';


function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/events")
          .then((response) => response.json())
          .then(events => {
            setEvents(events); 
            console.log('Events fetched...', events);
            });
          }, []);

    const deleteEvent = async (id) => {
      try {
        const deleteEvent = await fetch(`http://localhost:8080/api/events/${id}`, {
        method: "DELETE"
        }); 
        setEvents(events.filter(event => event.id !== id))
      } catch (err){
        console.error(err.message);
      }
    }

  return (
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} id={event.id} title={event.title} location={event.location} time={event.eventtime} deleteEvent={deleteEvent}/>
            )}
    </CardGroup>
    
  );
}

export default Events;