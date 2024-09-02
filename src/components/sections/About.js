import React from "react";
import "../styles/About.css";
import about1 from "../assets/img/about1.jpg";
import about2 from "../assets/img/about2.jpg";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 about__data">
            <h2 className="section__title about__title">
              More Information <br /> About The Best Beaches
            </h2>
            <p className="about__description">
              You can find the most beautiful and pleasant places at the best
              prices with special discounts, you choose the place we will guide
              you all the way to wait, get your place now.
            </p>
            <a href="#" className="btn btn-primary">
              Reserve a place
            </a>
          </div>
          <div className="col-md-6 about__img-container">
            <div className="about__img-wrapper">
              <img src={about1} alt="Beach view 1" className="about__img-one" />
            </div>
            <div className="about__img-wrapper">
              <img src={about2} alt="Beach view 2" className="about__img-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
