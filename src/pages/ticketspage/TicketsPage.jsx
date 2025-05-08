import React from "react";
import "./ticketsPage.css";
import Footer from "../../components/footer/Footer";
import TicketList from "../../components/ticketlist/TicketList";

function TicketsPage() {
  return (
    <>
      <main className="page">
        <h1 className="headingOne">Tickets</h1>
        <section className="tickets__section">
          <TicketList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TicketsPage;
