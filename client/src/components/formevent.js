import { useState } from "react";

const handleTitleChange = (e) => {
    e.preventDefault();
    let newTitle = e.target.value;
    console.log(newTitle);
}

const FormEvent = () => {
    const [event, setEvent] = useState({title: "", location:"", eventtime: ""})
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
        </form>
    )
}

export default FormEvent;