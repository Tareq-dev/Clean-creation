import React from "react";
import "./Plan.css";

const Plan = (props) => {
  const { name, content, price } = props.plan;
  return (
    <div className="card-plan col-md-2 mt-2 mx-2 p-2 text-center">
      <div>
        <h6>{name}</h6>
        <p>{content}</p>
        <p>${price} per meal</p>
      </div>
      <button className="border-0 rounded-3 btn-green fw-semibold text-white">
        Choose
      </button>
    </div>
  );
};

export default Plan;
