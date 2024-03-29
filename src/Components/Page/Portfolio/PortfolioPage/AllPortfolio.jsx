import React from "react";

const AllPortfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Portfolio</h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div>

          <div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <ul className="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
            </div>

            <div className="row gy-4 portfolio-container">
              <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/app-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/app-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        App 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/product-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/product-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Product 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/branding-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/branding-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Branding 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/books-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/books-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Books 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/app-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/app-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        App 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/product-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/product-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Product 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/branding-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/branding-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Branding 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/books-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/books-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Books 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/app-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/app-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        App 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/product-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/product-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Product 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/branding-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/branding-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Branding 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                <div className="portfolio-wrap">
                  <a
                    href="/assets/img/portfolio/books-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    className="glightbox"
                  >
                    <img
                      src="/assets/img/portfolio/books-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Books 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllPortfolio;
