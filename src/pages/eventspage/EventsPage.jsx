import React from "react";
import "./eventsPage.css";
import Footer from "../../components/footer/Footer";
import EventList from "../../components/eventlist/EventList";

function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <EventList />
      <Footer />
    </>
  );
}

export default EventsPage;
