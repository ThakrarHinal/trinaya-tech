import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  estimatedProjectLength: "",
  primaryProjectLanguage: "",
  resourceType: "",
  resourceTime: "",
  companyName: "",
  howDidYouHear: "",
};

export const Contact = (props) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setFormState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    emailjs
      .sendForm("service_yd8n7vs", "template_oxbybym", e.target, "f3s94SnAUuqPO8AgT")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact" className="contact-section" style={{ padding: "60px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            {/* Contact Form Card */}
            <div className="col-lg-8">
              <div className="card p-4 shadow rounded-lg">
                <div className="section-title mb-4">
                  <h2 className="text-center">Get In Touch</h2>
                  <p className="text-center">
                    Please fill out the form below and we'll get back to you soon.
                  </p>
                </div>
                <form name="sentMessage" validate onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name*"
                        required
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email*"
                        required
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Brief Description of the Services You Need*"
                      required
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="estimatedProjectLength"
                      className="form-control"
                      placeholder="Estimated Project Length"
                      value={formState.estimatedProjectLength}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="primaryProjectLanguage"
                      className="form-control"
                      placeholder="Primary Project Language"
                      value={formState.primaryProjectLanguage}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      name="resourceType"
                      className="form-control"
                      value={formState.resourceType}
                      onChange={handleChange}
                    >
                      <option value="">Full-time or Part-time Resource?</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="resourceTime"
                      className="form-control"
                      placeholder="Resource Time Needed"
                      value={formState.resourceTime}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="companyName"
                      className="form-control"
                      placeholder="Company Name"
                      value={formState.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      name="howDidYouHear"
                      className="form-control"
                      value={formState.howDidYouHear}
                      onChange={handleChange}
                    >
                      <option value="">How did you hear about us?</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Word of Mouth">Word of Mouth</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-custom btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info & Social Links */}
            <div className="col-lg-4 mt-5">
              <div className="contact-info p-4 border rounded-lg shadow">
                <div className="contact-item mb-4">
                  <h4>Contact Info</h4>
                  <p>
                    <i className="fa fa-map-marker me-2"></i>
                    {props.data ? props.data.address : "Loading..."}
                  </p>
                  <p>
                    <i className="fa fa-phone me-2"></i>
                    {props.data ? props.data.phone : "Loading..."}
                  </p>
                  <p>
                    <i className="fa fa-envelope-o me-2"></i>
                    {props.data ? props.data.email : "Loading..."}
                  </p>
                </div>

                <div className="social mt-4">
                  <h5>Follow Us</h5>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href={props.data ? props.data.linkedIn : "/"}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    {/* <li className="list-inline-item">
                      <a href={props.data ? props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={props.data ? props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer" className="text-center mt-5">
        <div className="container">
          <p>
            Copyright &copy; 2025 Trinaya Tech | {" "}
            <a href="/privacy-policy.html" rel="nofollow">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
