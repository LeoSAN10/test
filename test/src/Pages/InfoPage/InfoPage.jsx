import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./styles.css";

export const InfoPage = () => {
  return (
    <div className="info">
      <Navbar />
      <div className="info-container">
        <div className="info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          deserunt tenetur! Inventore sit eligendi sequi natus magnam quam
          possimus numquam assumenda minima dolore iusto non, placeat modi
          voluptas quibusdam? Deleniti.
        </div>
        <div className="info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          eligendi porro dolorum debitis aut accusantium, beatae adipisci cum!
          Doloremque maxime aut rerum nesciunt iusto aspernatur similique
          incidunt necessitatibus quisquam hic.
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
