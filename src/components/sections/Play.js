import React from "react";
import "../styles/Play.css";
import videofile from "../assets/video/video.mp4";
function Play() {
  return (
    <div>
      <section className="video section">
        <h2 className="section__title">Video Tour</h2>

        <div className="video__container container">
          <p className="video__description">
            Find out more with our video of the most beautiful and pleasant
            places for you and your family.
          </p>

          <div className="video__content">
            <video id="video-file" controls>
              <source src={videofile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button className="btn btn-primary video__button" id="video-button">
              <i
                className="video__button-icon ri-play-line"
                id="video-icon"
              ></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Play;
