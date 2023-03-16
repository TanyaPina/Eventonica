import { useState, useEffect } from "react";
import EventCard from "./eventCard";
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';
import FormEvent from "./formevent";


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
  
          const postRequest = (newEvent) => {
            //console.log("From the parent", newEvent);
            return fetch("http://localhost:8080/api/events", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(newEvent),
            })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              //console.log(data);
              setEvents((events) => [...events, data])
            })
          }

  return (
    <div>
    <CardGroup className="Events">
            {events.map(event =>
            <EventCard key={event.id} title={event.title} location={event.location} time={event.eventtime}/>
            )}
            <Badge bg="primary">New</Badge> {/*added from bootstrap, testing */}
    </CardGroup>
    <FormEvent postRequest={postRequest}/>
    </div>
  );
}

export default Events;