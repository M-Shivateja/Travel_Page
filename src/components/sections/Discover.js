import React from "react";
import "../styles/Discover.css";
import discover1 from "../assets/img/discover1.jpg";
import discover2 from "../assets/img/discover2.jpg";
import discover4 from "../assets/img/discover4.jpg";

const places = [
  {
    title: "Whitehaven",
    tours: "32 tours available",
    image: discover4,
  },
  {
    title: "Bali",
    tours: "24 tours available",
    image: discover1,
  },
  {
    title: "Hawaii",
    tours: "15 tours available",
    image: discover2,
  },
];

function Discover() {
  return (
    <section className="discover section" id="discover">
      <div className="container">
        <h2 className="section__title text-center">
          Discover The Most <br /> Attractive Places
        </h2>

        <div className="row justify-content-center">
          {places.map((place, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card discover__card">
                <img
                  src={place.image}
                  alt={place.title}
                  className="card-img-top discover__img"
                />
                <div className="card-body text-center">
                  <h5 className="card-title discover__title">{place.title}</h5>
                  <p className="card-text discover__description">
                    {place.tours}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Discover;
