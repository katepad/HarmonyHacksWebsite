import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer, Event as CalendarEvent } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calendar.css";
import Events from "../Data/events.json";
import FilterTabs from "./FilterTabs";

// Set up localizer for react-big-calendar using moment.js
const localizer = momentLocalizer(moment);

// Structure of events used for events.JSON
interface CustomEvent extends CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    location: string;
    type: string;
    description: string;
}

// Main calendar component
const EventCalendar: React.FC = () => {
    
    //State management
    const [events, setEvents] = useState<CustomEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [filter, setFilter] = useState<string>("All");
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [isFadingOut, setIsFadingOut] = useState(false);

    // Create filtered list of events based on selected filtered tab (See filterTabs.tsx)
    const filteredEvents = events.filter(event =>
        filter === "All" || event.type.toLowerCase() === filter.toLowerCase()
    );

    // Navigate between months
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

    // Load events from JSON file and parse date strings into Date objects
    useEffect(() => {
        const parsedEvents = Events.map((event) => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
        }));
        setEvents(parsedEvents);
    }, []);
    
    // Notification component for RSVP success/error popups
    const Notification: React.FC<{ type: "success" | "error"; message: string; fadingOut?: boolean }> = ({ type, message, fadingOut }) => (
        <div className={`notification ${type} ${fadingOut ? "fade-out" : ""}`}>
          {message}
        </div>
      );
      

    return (
        <div className= "calendar-container page-fade">

            {/* Display success or error notification */}
            {formStatus === "success" && (<Notification type="success" message = "Thanks for RSVPing! 🎉 We'll see you at the event." fadingOut = {isFadingOut} />)}
            {formStatus === "error" && (<Notification type="error" message = "Oops! Somethig went wrong. Please try again" fadingOut = {isFadingOut} />)}
            
            {/* Calendar header (Contains month title, filter bar, and nav arrows) */}
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

            {/* Calendar and event details */}
            <div className = "calendar-content">

                {/* Calendar view */}
                <Calendar
                    localizer = {localizer}
                    events = {filteredEvents}
                    formats = {{weekdayFormat: 'ddd'}}
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

                {/* Event module for selected event */}
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

                        {/* RSVP form */}
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="rsvp-form"
                            onSubmit={() => setFormStatus("submitting")}
                            target="hidden_iframe"
                            >
                            
                            {/* Web3Forms required fields */}
                            <input type="hidden" name="access_key" value="37a2d8e8-b510-4f39-b7d3-0348970fd5f3" />

                            {/* Notification UI edits */}
                            <input type="hidden" name="subject" value="🎉 You've received a new RSVP!" />
                            <input type="hidden" name="from_name" value="Harmony Hacks RSVP" />
    
                            {/* User input fields */}
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="email" name="email" placeholder="Email" required />

                            {/* Extra hidden event info */}
                            <input type="hidden" name="Event" value={selectedEvent?.title} />
                            <input type="hidden" name="Date" value={moment(selectedEvent?.start).format("MMMM Do, YYYY")} />
                            <input type="hidden" name="Time" value={`${moment(selectedEvent?.start).format("h:mm A")} - ${moment(selectedEvent?.end).format("h:mm A")}`} />
                            <input type="hidden" name="Location" value={selectedEvent?.location} />
                            <input type="hidden" name="Description" value={selectedEvent?.description} />

                            {/* Submit button */}
                            <button type="submit" disabled={formStatus === "submitting"}>
                                {formStatus === "submitting" ? "Submitting..." : "RSVP"}
                            </button>

                            {/* Hidden iframe for silent form submission */}
                            <iframe
                                name="hidden_iframe"
                                id="hidden_iframe"
                                style={{ display: "none" }}

                                onLoad={() => {
                                    if (formStatus === "submitting") {
                                        setFormStatus("success");
                                        setSelectedEvent(null);
                                        setTimeout(() => {
                                            setIsFadingOut(true); // Start fade-out animation
                                            setTimeout(() => {
                                                setFormStatus("idle"); // After fade-out ends, hide it
                                                setIsFadingOut(false); // Reset fade state
                                            }, 500);
                                        }, 2500);
                                    }
                                }}
                            />
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCalendar;