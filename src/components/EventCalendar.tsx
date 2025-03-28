import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Event as CalendarEvent } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calendar.css";

const localizer = momentLocalizer(moment);

interface CustomEvent extends CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    location: string;
    type: string;
}

const formats = {
    weekdayFormat: 'dddd', // Full day name format
};

const EventCalendar: React.FC = () => {
    const [events, setEvents] = useState<CustomEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevMonth = () => {
        const prev = new Date(currentDate);
        prev.setMonth(prev.getMonth() - 1);
        setCurrentDate(prev);
    };

    const handleNextMonth = () => {
        const next = new Date(currentDate);
        next.setMonth(next.getMonth() + 1);
        setCurrentDate(next);
    };

    useEffect(() => {
        // Temporary mock data
        const mockEvents: CustomEvent[] = [
            {
                id: "1",
                title: "Leadership Workshop",
                start: new Date(2025, 2, 10, 14, 0),
                end: new Date(2025, 2, 10, 16, 0),
                location: "Room 101, Tech Building",
                type: "Workshops",
            },
            {
                id: "2",
                title: "Urbane Cafe Fundy",
                start: new Date(2025, 2, 15, 18, 0),
                end: new Date(2025, 2, 15, 21, 0),
                location: "Community Hall",
                type: "Fundraisers",
            },
            {
                id: "3",
                title: "3rd GBM",
                start: new Date(2025, 2, 19, 18, 0),
                end: new Date(2025, 2, 19, 21, 0),
                location: "SBSB 1102",
                type: "GBM Events"
            },
        ];
        setEvents(mockEvents);
    }, []);


    return (
        <div className= "calendar-container">
            <div className = "calendar-header">
                <h2 className = "page-h1 calendar-month">
                    {moment(currentDate).format("MMMM YYYY")}
                </h2>
                <div className = "nav-buttons">
                    <button className = "nav-arrow" onClick = {handlePrevMonth}>&lsaquo;</button>
                    <button className = "nav-arrow" onClick = {handleNextMonth}>&rsaquo;</button>
                </div>
            </div>
            <div className = "calendar-content">
                <Calendar
                    localizer = {localizer}
                    events = {events}
                    formats = {formats}
                    date = {currentDate}
                    toolbar = {false} // We're using our own toolbar

                    startAccessor = "start"
                    endAccessor = "end"
                    style = {{ height: 600, width: "100%"}}
                    view = "month"

                    onSelectEvent = {(event) => setSelectedEvent(event as CustomEvent)}
                    onNavigate = {(date) => setCurrentDate(date)}
                    onDrillDown = {() => false}
                    drilldownView = {null}

                    components={{
                        event: ({ event }: { event: CustomEvent }) => (
                        <div className={`event-chip ${event.type.replace(/\s/g, '').toLowerCase()}`}>
                            {event.title}
                        </div>
                        )
                    }}
                />

                {selectedEvent && (
                    <div className= "event-module">
                        <button className = "close-icon" onClick = {() => setSelectedEvent(null)}>
                            &times;
                        </button>
                        <h3>{selectedEvent.title}</h3>
                        <p><strong>Date:</strong> {moment(selectedEvent.start).format("MMMM Do YYYY")}</p>
                        <p><strong>Time:</strong> {moment(selectedEvent.start).format("h:mm A")} - {moment(selectedEvent.end).format("h:mm A")}</p>
                        <p><strong>Location:</strong> {selectedEvent.location}</p>
                        <p><strong>Type:</strong> {selectedEvent.type}</p>

                        <form className = "rsvp-form" onSubmit = {(e) => { e.preventDefault(); alert("RSVP submitted!"); setSelectedEvent(null); }}>
                            <input type = "text" placeholder = "Name" required />
                            <input type = "email" placeholder = "Email" required />
                            <button type = "submit">Submit</button>
                        </form>

                    
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCalendar;