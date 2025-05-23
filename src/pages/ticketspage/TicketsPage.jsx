import React from "react";
import Footer from "../../components/footer/Footer";
import TicketList from "../../components/ticketlist/TicketList";

import "./ticketsPage.css";

function TicketsPage() {
  return (
    <>
      <main className="page page--tickets" aria-label="My ticket page">
        <section className="tickets__section">
          <TicketList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TicketsPage;
