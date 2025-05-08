import React from "react";
import "./homePage.css";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <>
      <main className="page page--home">
        <Logo />
        <h1 className="headingOne headingOne--padding">Where It´s @</h1>
        <p className="subtitle">Ticketing made easy</p>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
