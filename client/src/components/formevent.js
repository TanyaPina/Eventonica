import { useState } from "react";

const [event, setEvent] = useState({title: "", location:"", eventtime: ""})

const FormEvent = () => {
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