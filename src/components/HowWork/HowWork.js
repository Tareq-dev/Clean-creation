import React from "react";
import "./HowWork.css";

const HowWork = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center">How It Works</h2>
      <div className="row mt-3 work d-flex justify-content-center p-3 ">
        <div className="col-md-3 col-12 border p-2 shadow-sm rounded-3">
          <div className="d-flex justify-content-center">
            <img
              src="https://cleancreations.com/data/config/theme_howitworks_item1_image.svg?md=a90764e4d1943d70ade260f7af365720"
              alt="place-order"
            />
          </div>
          <div className="text-center mt-2">
            <h5>Place Order</h5>
            <p>
              Select from our wide variety of signature dishes, custom, or
              specialty meal options. Pick up in Baton Rouge or choose between
              in-store pickup or delivery in the New Orleans Metro Area
            </p>
          </div>
        </div>
        <div className="col-md-3 col-12 border p-2 shadow-sm rounded-3 mx-3">
          <div className="d-flex justify-content-center">
            <img
              src="https://cleancreations.com/data/config/theme_howitworks_item2_image.svg?md=479cab042576f04da7f0a2ab489f63bb"
              alt="place-order"
            />
          </div>
          <div className="text-center mt-2">
            <h5>COOK</h5>
            <p>
              Our staff will carefully prepare, cook, and package all of your
              meals and have them fresh and ready to go!
            </p>
          </div>
        </div>
        <div className="col-md-3 col-12 border p-2 shadow-sm rounded-3">
          <div className="d-flex justify-content-center">
            <img
              src="https://cleancreations.com/data/config/theme_howitworks_item3_image.svg?md=31b0e449112fcc4e895a653e28dffb22"
              alt="place-order"
            />
          </div>
          <div className="text-center mt-2">
            <h5>PICKUP / DELIVER</h5>
            <p>
              You choose whether to pick up your meals in our very own brick and
              mortar location or even choose a delivery method in case you are
              busy. We never want you to miss out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
