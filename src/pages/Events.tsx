import EventCalendar from "../components/EventCalendar";

const Events = () => {
  return (
    <div>
      <h1 className="page-h1 color-purple" style={{ marginLeft: "5rem" }}> Events </h1>
      <EventCalendar />
    </div>
  );
};

export default Events;