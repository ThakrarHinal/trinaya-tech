import React, { useEffect, useState } from "react";
import "../App.css";

export const Header = ({ data }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header id="header" className="hero-section">
      <div className="intro">
        <div className={`overlay ${animate ? "show" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1 className="fade-in-up hero-text">
                  {data ? data.title : "Loading..."}
                </h1>
                <p className="fade-in-up delay-1">
                  {data ? data.paragraph : "Please wait..."}
                </p>
                <p className="fade-in-up delay-1">
                  {data ? data.paragraph1 : "Please wait..."}
                </p>
                <a href="#features" className="btn-custom fade-in-up delay-2">
                  {/* {data ? data.button : "Explore"} */}
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
