import React from "react";

export const Phases = (props) => {
  if (!props.data || !Array.isArray(props.data)) {
    return null; // or a loading spinner / message if you want
  }

  return (
    <div >
    <div >
      <h2>How We Bring Your Vision to Life</h2>
      <p>
        Our team has a wide breadth of experience and language familiarity, giving you the flexibility to completely customize your development needs.
      </p>
    </div>
    <div className="phase-flow-container">
      {props.data.map((phase, index) => (
        <div key={index} className="phase-item">
          <div className="phase-circle">{index + 1}</div>
          <h3>{phase.title}</h3>
          <p>{phase.description}</p>
          {index !== props.data.length - 1 && <div className="phase-connector"></div>}
        </div>
      ))}
    </div>
  </div>
  );
};
