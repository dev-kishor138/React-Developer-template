import React from "react";

const BlogPost = () => {
  return (
    <>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4 posts-list">
            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/assets/img/blog/blog-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Politics</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="/assets/img/blog/blog-author.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author-list">Maria Doe</p>
                    <p className="post-date">
                      <time datetime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/assets/img/blog/blog-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Sports</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Nisi magni odit consequatur autem nulla dolorem
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="/assets/img/blog/blog-author-2.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author-list">Allisa Mayer</p>
                    <p className="post-date">
                      <time datetime="2022-01-01">Jun 5, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/assets/img/blog/blog-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Entertainment</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Possimus soluta ut id suscipit ea ut in quo quia et soluta
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="/assets/img/blog/blog-author-3.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author-list">Mark Dower</p>
                    <p className="post-date">
                      <time datetime="2022-01-01">Jun 22, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/assets/img/blog/blog-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Sports</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Non rem rerum nam cum quo minus olor distincti
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="/assets/img/blog/blog-author-4.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author-list">Lisa Neymar</p>
                    <p className="post-date">
                      <time datetime="2022-01-01">Jun 30, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/assets/img/blog/blog-5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Politics</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Accusamus quaerat aliquam qui debitis facilis consequatur
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/blog/blog-author-5.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author-list">Denis Peterson</p>
                    <p className="post-date">
                      <time datetime="2022-01-01">Jan 30, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-xl-4 col-md-6">
              <article>
                <div className="post-img">
                  <img
                    src="/assets/img/blog/blog-6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Entertainment</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Distinctio provident quibusdam numquam aperiam aut
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="/assets/img/blog/blog-author-6.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author-list">Mika Lendon</p>
                    <p className="post-date">
                      <time datetime="2022-01-01">Feb 14, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="blog-pagination">
            <ul className="justify-content-center">
              <li>
                <a href="">1</a>
              </li>
              <li className="active">
                <a href="">2</a>
              </li>
              <li>
                <a href="">3</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
