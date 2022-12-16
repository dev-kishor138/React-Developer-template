import React from "react";

const Topbar = () => {
  return (
    <>
      <section id="topbar" className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a target="_blank" href="https://twitter.com/" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a target="_blank" href="https://facebook.com" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://instagram.com"
              className="instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a target="_blank" href="https://linkedin.com" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topbar;
