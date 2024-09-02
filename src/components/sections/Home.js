import React from "react";
import "../styles/Home.css";
import homeBgImg from "../assets/img/home1.jpg";
import home2 from "../assets/img/home2.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <section
      className="home"
      id="home"
      style={{ backgroundImage: `url(${homeBgImg})` }}
    >
      <div className="overlay">
        <div className="container home__container">
          <div className="home__data">
            <span className="home__data-subtitle">Discover your place</span>
            <h1 className="home__data-title">
              Explore The <br /> Best{" "}
              <b>
                Beautiful <br /> Beaches
              </b>
            </h1>
            <a href="#" className="btn btn-primary">
              Explore
            </a>
          </div>

          <div className="home__info-box">
            <div className="home__info">
              <span className="home__info-title">5 best places to visit</span>
              <a href="#" className="home__info-button">
                More <i className="ri-arrow-right-line"></i>
              </a>
            </div>
            <div className="wrapper">
              <img src={home2} alt="Info" className="home__info-img" />
            </div>
          </div>
        </div>

        <div className="home__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
