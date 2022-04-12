import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header row">
      <div className="col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
        <div className="bg-blur mt-5 mx-2">
          <h1>Get Started</h1>
          <h1>With a Healthier You</h1>
          <p>
            We make eating healthy convenient and delicious so you can have more
            time to do the things you love.
          </p>
          <button className="bg-info border-0 rounded px-2 py-2">Get Started</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Header;
