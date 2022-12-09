import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./styles.css";

export const MainPage = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="main-title">We make the future. Join us</div>
      <div className="main-text">Whatever the approach to development may be, the final program must satisfy some fundamental properties</div>
    </div>
  );
};

export default MainPage;
