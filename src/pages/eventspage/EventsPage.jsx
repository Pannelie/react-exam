import React from "react";
import "./eventsPage.css";
import Footer from "../../components/footer/Footer";
import EventList from "../../components/eventlist/EventList";
import SearchBar from "../../components/searchbar/SearchBar";

function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <SearchBar />
      <EventList />
      <Footer />
    </>
  );
}

export default EventsPage;
