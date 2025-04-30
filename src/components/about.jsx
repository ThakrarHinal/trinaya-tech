import React from "react";

export const About = (props) => {
  if (!props.data || !Array.isArray(props.data)) {
    return null; // or a loading spinner / message if you want
  }
  return (
    <div id="about" className="text-center">
      <div className="container">
        <div className="row">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
        </div>
        <div className="cards-wrapper">
          {props.data.map((item, index) => (
            <div key={index} className="about-card">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
