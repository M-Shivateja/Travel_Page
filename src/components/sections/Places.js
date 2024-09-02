import React from "react";
import "../styles/Places.css";
import "bootstrap/dist/css/bootstrap.min.css";
import place1 from "../assets/img/place1.jpg";
import place2 from "../assets/img/place2.jpg";
import place3 from "../assets/img/place3.jpg";
import place4 from "../assets/img/place4.jpg";
import place5 from "../assets/img/place5.jpg";

const places = [
  {
    id: 1,
    imgSrc: place1,
    rating: 4.8,
    title: "Bali",
    subtitle: "Indonesia",
    price: "$2499",
  },
  {
    id: 2,
    imgSrc: place2,
    rating: 5.0,
    title: "Bora Bora",
    subtitle: "Polinesia",
    price: "$1599",
  },
  {
    id: 3,
    imgSrc: place3,
    rating: 4.9,
    title: "Hawaii",
    subtitle: "EE.UU",
    price: "$3499",
  },
  {
    id: 4,
    imgSrc: place4,
    rating: 4.8,
    title: "Whitehaven",
    subtitle: "Australia",
    price: "$2499",
  },
  {
    id: 5,
    imgSrc: place5,
    rating: 4.8,
    title: "Hvar",
    subtitle: "Croacia",
    price: "$1999",
  },
];

function Places() {
  return (
    <section className="place-section container">
      <h2 className="section-title text-center my-5">Choose Your Place</h2>

      <div className="row">
        {places.map((place) => (
          <div className="col-md-4 col-lg-4 mb-4" key={place.id}>
            <div className="card place-card h-100">
              <img
                src={place.imgSrc}
                className="card-img-top place-img"
                alt={place.title}
              />
              <div className="card-body place-content">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title place-title">{place.title}</h5>
                  <span className="badge bg-primary place-rating">
                    <i className="bi bi-star-fill"></i> {place.rating}
                  </span>
                </div>
                <p className="card-text place-subtitle">{place.subtitle}</p>
                <p className="card-text place-price text-end">{place.price}</p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary">
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Places;
