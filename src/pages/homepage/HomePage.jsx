import React from "react";
import "./homePage.css";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <>
      <main className="home-page">
        <Logo />
        <h1>Home</h1>
        <p className="home__subtitle">Ticketing made easy</p>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
