import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Impact</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits"></div>
        </div>
      </footer>

      <a
        href=""
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {/* <div id="preloader"></div> */}
    </>
  );
};

export default Footer;
