import { useState } from "react";



const FormEvent = () => {
    const [event, setEvent] = useState({title: "", location:"", eventtime: ""})
    return (
        <form onSubmit={handleSubmit}>
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