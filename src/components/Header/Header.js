import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header row">
      <div class="col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
        <div class="bg-blur mt-5">
          <h1>Get Started</h1>
          <h1>With a Healthier You</h1>
          <p>
            We make eating healthy convenient and delicious so you can have more
            time to do the things you love.
          </p>
          <button class="bg-info border-0 rounded px-2 py-2">Get Started</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Header;
