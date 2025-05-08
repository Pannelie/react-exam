import React from "react";
import Lottie from "lottie-react";
import searchAnimation from "../../assets/animations/not-found-img.json";
import "./notFound.css";

function NotFound() {
  return <Lottie animationData={searchAnimation} loop autoplay className="not-found" />;
}

export default NotFound;
