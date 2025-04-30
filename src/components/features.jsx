import React from "react";

export const Features = (props) => {
  if (!props.data || !Array.isArray(props.data)) {
    return null; // or a loading spinner / message if you want
  }

  return (
    <div id="features" className="text-center">
    <div className="container">
    <div className="col-md-10 col-md-offset-1 section-title">
           <h2>Features</h2>
           <p>
        Our team has a wide breadth of experience and language familiarity, giving you the flexibility to completely customize your development needs.
      </p>
         </div>
    </div>
    <div className="row phase-flow-container">
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


    // <div id="features" className="text-center">
    //   <div className="container">
    //     <div className="col-md-10 col-md-offset-1 section-title">
    //       <h2>Features</h2>
    //     </div>
    //     <div className="row">
    //       {props.data
    //         ? props.data.map((d, i) => (
    //             <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
    //               {" "}
    //               <i className={d.icon}></i>
    //               <h3>{d.title}</h3>
    //               <p>{d.text}</p>
    //             </div>
    //           ))
    //         : "Loading..."}
    //     </div>
    //   </div>
    // </div>

    // "Features": [
    //   {
    //     "icon": "fa fa-comments-o",
    //     "title": "Lorem ipsum",
    //     "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    //   },
    //   {
    //     "icon": "fa fa-bullhorn",
    //     "title": "Lorem ipsum",
    //     "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    //   },
    //   {
    //     "icon": "fa fa-group",
    //     "title": "Lorem ipsum",
    //     "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    //   },
    //   {
    //     "icon": "fa fa-magic",
    //     "title": "Lorem ipsum",
    //     "text": "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    //   }
    // ],