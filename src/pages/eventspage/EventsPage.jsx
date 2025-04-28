import React from "react";
import { useParams } from "react-router-dom";
import "./eventsPage.css";
import Footer from "../../components/footer/Footer";

function EventsPage() {
  const { id } = useParams();

  return (
    <>
      <h1>Events</h1>;
      <Footer />
    </>
  );
}

export default EventsPage;
