import React, { useState } from "react";

export const Services = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We help organizations from early bootstrapping through enterprise
            scale, delivering the right blend of strategy, engineering, and
            growth marketing. Below you'll find detailed service descriptions,
            the tech we deploy, and the verticals we know best (accounting, hotel
            management, real estate, e-commerce, and healthcare).
          </p>
        </div>
        <div className="row justify-content-center">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-md-4 mb-4 d-flex"
                onClick={() => handleToggle(i)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`service-card h-100 d-flex flex-column align-items-center w-100 p-3 ${
                    activeIndex === i ? "active" : ""
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                    boxShadow: activeIndex === i ? "0px 4px 20px rgba(0,0,0,0.2)" : "0px 2px 10px rgba(0,0,0,0.1)",
                    background: activeIndex === i ? "#f9f9f9" : "white",
                    borderRadius: "15px",
                  }}
                >
                  <div className="icon-container mb-3">
                    <i className={d.icon} style={{ fontSize: "40px" }}></i>
                  </div>
                  <h4 className="mb-3">{d.name}</h4>

                  {/* Only show description if active */}
                  {activeIndex === i && (
                    <div className="service-desc text-start w-100">
                      <strong>Deliverables:</strong>
                      <ul>
                        {d.deliverables.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      <strong>Tech Stack:</strong>
                      <p>{d.techStack.join(", ")}</p>
                      <strong>Industries:</strong>
                      <p>{d.verticals.join(", ")}</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            "loading..."
          )}
        </div>
      </div>
    </div>
  );
};
