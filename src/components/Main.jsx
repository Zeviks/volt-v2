import React from "react";
import Features from "./Features";
import Home from "./Home";
import Partners from "./Partners";
import Steps from "./Steps";
import CTA from "./CTA";
import Stats from "./Stats";

const Main = () => {
  return (
    <div>
      <Home />
      <Partners />
      <Stats />
      <Features />
      <Steps />
      {/* <CTA /> */}
    </div>
  );
};

export default Main;
