import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Event as CalendarEvent } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calendar.css";
import Events from "../Data/events.json";
import FilterTabs from "./FilterTabs";

const localizer = momentLocalizer(moment);

interface CustomEvent extends CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    location: string;
    type: string;
    description: string;
}

const EventCalendar: React.FC = () => {
    const [events, setEvents] = useState<CustomEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [filter, setFilter] = useState<string>("All");
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");


    const filteredEvents = events.filter(event =>
        filter === "All" || event.type.toLowerCase() === filter.toLowerCase()
    );

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
        const parsedEvents = Events.map((event) => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
        }));
        setEvents(parsedEvents);
    }, []);
    

    return (
        <div className= "calendar-container page-fade">
            
            <div className = "calendar-header">
                <div className = "month-and-tabs">
                    <h2 className = "page-h1 calendar-month">
                        {moment(currentDate).format("MMMM YYYY")}
                    </h2>
                    <FilterTabs filter={filter} setFilter={setFilter} />
                </div>
                
                <div className = "nav-buttons">
                    <button className = "nav-arrow" onClick = {handlePrevMonth}>&lsaquo;</button>
                    <button className = "nav-arrow" onClick = {handleNextMonth}>&rsaquo;</button>
                </div>
            </div>

            <div className = "calendar-content">
                <Calendar
                    localizer = {localizer}
                    events = {filteredEvents}
                    formats={{
                        weekdayFormat: 'ddd',
                      }}
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
                    popup

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
                        <p className = "event-description"> {selectedEvent.description}</p>
                        <p className = "event-details"><strong>Date:</strong> {moment(selectedEvent.start).format("MMMM Do, YYYY")}</p>
                        <p className = "event-details"><strong>Time:</strong> {moment(selectedEvent.start).format("h:mm A")} - {moment(selectedEvent.end).format("h:mm A")}</p>
                        <p className = "event-details"><strong>Location:</strong> {selectedEvent.location}</p>

                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="rsvp-form"
                            onSubmit={() => setFormStatus("submitting")}
                            target="hidden_iframe"
                            >
                            <input type="hidden" name="access_key" value="41227caa-5775-4f91-808e-4af39fa94a7e" />
                            
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="email" name="email" placeholder="Email" required />

                            {/* Extra hidden event info */}
                            <input type="hidden" name="Event" value={selectedEvent?.title} />
                            <input type="hidden" name="Date" value={moment(selectedEvent?.start).format("MMMM Do, YYYY")} />
                            <input type="hidden" name="Time" value={`${moment(selectedEvent?.start).format("h:mm A")} - ${moment(selectedEvent?.end).format("h:mm A")}`} />
                            <input type="hidden" name="Location" value={selectedEvent?.location} />
                            <input type="hidden" name="Description" value={selectedEvent?.description} />

                            <button type="submit" disabled={formStatus === "submitting"}>
                                {formStatus === "submitting" ? "Submitting..." : "RSVP"}
                            </button>

                            <iframe
                                name="hidden_iframe"
                                id="hidden_iframe"
                                style={{ display: "none" }}
                                onLoad={() => {
                                if (formStatus === "submitting") {
                                    setFormStatus("success");
                                    setSelectedEvent(null);
                                }
                                }}
                            />
                            </form>

                            {formStatus === "success" && (
                            <p className="success-message">Thanks for RSVPing! 🎉 We'll see you at the event.</p>
                            )}
                            {formStatus === "error" && (
                            <p className="error-message">Oops! Something went wrong. Please try again.</p>
                            )}


                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCalendar;