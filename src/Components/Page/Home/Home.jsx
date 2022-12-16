import React from "react";
import Aboutus from "./Hompage/Aboutus";
import Banner from "./Hompage/Banner";
import Client from "./Hompage/Client";
import Ourservice from "./Hompage/Ourservice";
import Team from "./Hompage/Team";

const Home = () => {
  return (
    <>
      <Banner />
      <Ourservice />
      <Aboutus />
      <Client />
      <Team />
    </>
  );
};

export default Home;
