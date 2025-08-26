import React from 'react'

function Events() {
  return (
    
    <>
  {/* Events Start */}
  <div className="container-fluid event py-6">
    <div className="container">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
          Latest Events
        </small>
        <h1 className="display-5 mb-5">
          Our Social &amp; Professional Events Gallery
        </h1>
      </div>
      <div className="tab-class text-center">
        <ul
          className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
          data-wow-delay="0.1s"
        >
          <li className="nav-item p-2">
            <a
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active"
              data-bs-toggle="pill"
              href="#tab-1"
            >
              <span className="text-dark" style={{ width: 150 }}>
                All Events
              </span>
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-2"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Wedding
              </span>
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-3"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Corporate
              </span>
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-4"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Cocktail
              </span>
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              href="#tab-5"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Buffet
              </span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-1.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <a
                          href="assets/img/event-1.jpg"
                          data-lightbox="event-1"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-2.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <a
                          href="assets/img/event-2.jpg"
                          data-lightbox="event-2"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-3.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <a
                          href="assets/img/event-3.jpg"
                          data-lightbox="event-3"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-4.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <a
                          href="assets/img/event-4.jpg"
                          data-lightbox="event-4"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-5.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Cocktail</h4>
                        <a
                          href="assets/img/event-5.jpg"
                          data-lightbox="event-5"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-6.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <a
                          href="assets/img/event-6.jpg"
                          data-lightbox="event-6"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-7.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <a
                          href="img/event-7.jpg"
                          data-lightbox="event-7"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-8.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <a
                          href="assets/img/event-8.jpg"
                          data-lightbox="event-17"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-1.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-8"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-2.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-9"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-3.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-10"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-4.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-11"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-4" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-5.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Cocktail</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-12"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-6.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Cocktail</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-13"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-5" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-7.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-14"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="assets/img/event-8.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <a
                          href="assets/img/01.jpg"
                          data-lightbox="event-15"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Events End */}


    </>
  )
}

export default Events
