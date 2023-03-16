import { useState } from "react";

const FormEvent = () => {
    const [event, setEvent] = useState({ title: "", location: "", eventtime: "" })

    const handleTitleChange = (e) => {
        e.preventDefault();
        let newTitle = e.target.value;
        setEvent((event) => ({...event, title: newTitle}));
        console.log(event.title);
    }
    
    const handleLocationChange = (e) => {
        e.preventDefault();
        let newLocation = e.target.value;
        setEvent((event) => ({...event, location: newLocation}));
        console.log(event.location);
    }
    
    return (
        <form>
            <label>Title</label>
            <input
                type="text"
                id="add-event-title"
                placeholder="The Title of Your Event"
                required
                value={event.title} //state
                onChange={handleTitleChange}
            />
            <label>Location</label>
            <input
                type="text"
                id="add-event-location"
                placeholder="The Location of Your Event"
                required
                value={event.location} //state
                onChange={handleLocationChange}
            />
        </form>
    )
}

export default FormEvent;