import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {/* Trinaya Tech */}
            <img
  src="img/logo.png"
  className="img-responsive"
  alt="Trinaya Tech Logo"
  style={{ height: "200px", marginTop: "-85px" }}
/>
            {/* <img
              src="img/01.jpg" // replace with the path to your logo
              // alt="Trinaya Tech Logo"
              // style={{ height: "40px" }} // You can adjust the height based on your design
            /> */}
            {/* <img src="img/logo.png" className="img-responsive" alt="" style={{height: "800%", marginBottom: "200%"}} />{" "} */}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                PhaseFlow
              </a>
            </li>  */}
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
  <a href="https://whyagenticai.substack.com/" className="page-scroll" target="_blank" rel="noopener noreferrer">Blogs</a>
</li>

            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


 // "Gallery": [
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/01-large.jpg",
  //     "smallImage": "img/portfolio/01-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/02-large.jpg",
  //     "smallImage": "img/portfolio/02-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/03-large.jpg",
  //     "smallImage": "img/portfolio/03-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/04-large.jpg",
  //     "smallImage": "img/portfolio/04-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/05-large.jpg",
  //     "smallImage": "img/portfolio/05-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/06-large.jpg",
  //     "smallImage": "img/portfolio/06-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/07-large.jpg",
  //     "smallImage": "img/portfolio/07-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/08-large.jpg",
  //     "smallImage": "img/portfolio/08-small.jpg"
  //   },
  //   {
  //     "title": "Project Title",
  //     "largeImage": "img/portfolio/09-large.jpg",
  //     "smallImage": "img/portfolio/09-small.jpg"
  //   }
  // ],