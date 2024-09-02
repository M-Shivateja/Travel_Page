import React from "react";
import sponsor1 from "../assets/img/sponsors1.png";
import sponsor2 from "../assets/img/sponsors2.png";
import sponsor3 from "../assets/img/sponsors3.png";
import sponsor4 from "../assets/img/sponsors4.png";
import sponsor5 from "../assets/img/sponsors5.png";
import "../styles/Sponsors.css";

function Sponsors() {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

  return (
    <section className="sponsor section">
      <div className="container">
        <div className="row">
          {sponsors.map((sponsor, index) => (
            <div
              className="col-6 col-md-4 col-lg-2 sponsor__content"
              key={index}
            >
              <img
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="sponsor__img img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
