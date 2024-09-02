import React from "react";
import "../styles/Subscribe.css";
function Subscribe() {
  return (
    <div>
      <section className="subscribe section">
        <div className="subscribe__bg">
          <div className="subscribe__container container">
            <h2 className="section__title subscribe__title">
              Subscribe Our <br /> Newsletter
            </h2>
            <p className="subscribe__description">
              Subscribe to our newsletter and get a special 30% discount.
            </p>

            <form className="subscribe__form">
              <input
                type="email"
                placeholder="Enter email"
                className="form-control subscribe__input"
              />
              <button
                type="submit"
                className="btn btn-primary subscribe__button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
