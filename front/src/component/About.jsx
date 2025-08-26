import React from 'react'

function About() {
  return (
    <>
  {/* About Satrt */}
  <div className="container-fluid py-6">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
          <img src="assets/img/about.jpg" className="img-fluid rounded" alt="" />
        </div>
        <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            About Us
          </small>
          <h1 className="display-5 mb-4">Trusted By 200 + satisfied clients</h1>
          <p className="mb-4">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor iesdein reprehendeerit in
            voluptate velit esse cillum dolore.
          </p>
          <div className="row g-4 text-dark mb-5">
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              Fresh and Fast food Delivery
            </div>
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              24/7 Customer Support
            </div>
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              Easy Customization Options
            </div>
            <div className="col-sm-6">
              <i className="fas fa-share text-primary me-2" />
              Delicious Deals for Delicious Meals
            </div>
          </div>
          <a href="" className="btn btn-primary py-3 px-5 rounded-pill">
            About Us
            <i className="fas fa-arrow-right ps-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
   {/* Fact Start*/}
   <div className="container-fluid faqt py-6">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <div className="row g-4">
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  689
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Happy Customers
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users-cog fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  107
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Expert Chefs
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-check fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  253
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Events Complete
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
          <div className="video">
            <button
              type="button"
              className="btn btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Video */}
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
</>

  )
}

export default About
