import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/Page/About/About";
import Blog from "./Components/Page/Blog/Blog";
import ContactPage from "./Components/Page/Contact/ContactPage";
import Home from "./Components/Page/Home/Home";
import Portfolio from "./Components/Page/Portfolio/Portfolio";
import Services from "./Components/Page/Services/Services";
import TeamPage from "./Components/Page/Team/TeamPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
