import Card from 'react-bootstrap/Card';
import Moment from "react-moment";

const EventCard = (props) =>{

    return(
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.location}
      </Card.Text>
    </Card.Body>
  </Card>
  )}

export default EventCard;
//this is creating a card, is the child of events.js and is getting props from it 