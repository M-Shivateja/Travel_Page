import React from "react";

import About from "../sections/About";
import Home from "../sections/Home";
import Discover from "../sections/Discover";
import Experience from "../sections/Experience";
import Places from "../sections/Places";
import Subscribe from "../sections/Subscribe";
import Play from "../sections/Play";
import Sponsors from "../sections/Sponsors";
function Main() {
  return (
    <div>
      <div>
        <Home />
        <About />
        <Discover />
        <Experience />
        <Play />
        <Places />
        <Subscribe />
        <Sponsors />
      </div>
    </div>
  );
}

export default Main;
