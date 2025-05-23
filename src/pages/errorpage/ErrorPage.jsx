import React from "react";
import Footer from "../../components/footer/Footer";
import NotFound from "../../components/notfound/NotFound";
import "./errorPage.css";

function ErrorPage() {
  return (
    <main className="page page-error">
      <NotFound />
      <h1 className="headingOne">Error</h1>
      <p className="message">Kunde tyvärr inte hitta det du letade efter</p>
      <Footer />
    </main>
  );
}

export default ErrorPage;
