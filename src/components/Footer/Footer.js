import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <div className="row">
        <div className="col-md-6 col-12 mx-4 mt-3 mb-5">
          <h2>Clean Creations</h2>
          <div>
            <p className="pb-0 mb-0 lh-1">+088 01905243744</p>
            <p className="pb-0">
              <small>tareque.dev@gmail.com</small>
            </p>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </div>
          <button className="border-0 mt-4 sign-btn text-dark px-2 py-2">
            Sign Up for our Newsletter
          </button>
          <p className="mt-3">
            <small>© 2022 Clean Creations(trk). All Rights Reserved.</small>
          </p>
        </div>
        <div className="col-md-3 col-12"></div>
        <div className="col-md-3 col-12"></div>
      </div>
    </div>
  );
};

export default Footer;
