import React from "react";
import "../styles/Experience.css";
import boat1 from "../assets/img/experience1.jpg";
import person from "../assets/img/experience2.jpg";

function Experience() {
  return (
    <div className="experience-section text-center">
      <h2>With Our Experience We Will Serve You</h2>
      <div className="experience-stats d-flex justify-content-center">
        <div className="stat-item">
          <h3>20</h3>
          <p>Year Experience</p>
        </div>
        <div className="stat-item">
          <h3>75</h3>
          <p>Complete tours</p>
        </div>
        <div className="stat-item">
          <h3>650+</h3>
          <p>Tourist Destination</p>
        </div>
      </div>
      <div className="experience-images">
        <img src={boat1} alt="Boat" className="image-large" />
        <img src={person} alt="Diver" className="image-small" />
      </div>
    </div>
  );
}

export default Experience;
