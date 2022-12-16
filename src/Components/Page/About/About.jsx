import React from "react";
import Aboutus from "../Home/Hompage/Aboutus";
import Client from "../Home/Hompage/Client";
import Breadcrumbs from "./Aboutpage/Breadcrumbs";
import Faq from "./Aboutpage/Faq";
import StatsCounter from "./Aboutpage/StatsCounter";

const About = () => {
  return (
    <>
      <Breadcrumbs />
      <Aboutus />
      <Faq />
      <Client />
      <StatsCounter />
    </>
  );
};

export default About;
