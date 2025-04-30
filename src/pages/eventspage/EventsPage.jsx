import React from "react";
import "./eventsPage.css";
import Footer from "../../components/footer/Footer";
import EventList from "../../components/eventlist/EventList";
import SearchBar from "../../components/searchbar/SearchBar";

function EventsPage() {
  return (
    <>
      <main className="event-page">
        <h1 className="headingOne">Events</h1>
        <SearchBar />
        <EventList />
      </main>
      <Footer />
    </>
  );
}

export default EventsPage;
