import React from "react";
import { useParams } from "react-router-dom";
import "./eventsPage.css";
import Footer from "../../components/footer/Footer";
import EventList from "../../components/eventlist/EventList";

function EventsPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Events</h1>;
      <EventList />
      <Footer />
    </>
  );
}

export default EventsPage;
