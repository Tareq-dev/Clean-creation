import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./viewSinglePd.css";

const ViewSinglePd = ({ view ,addToCart }) => {
  return (
    <div className="menu shadow border d-flex">
      <div>
        <img src={view.img} alt="img" />
      </div>
      <div className="ms-2">
        <h5>{view.name}</h5>
        <p>{view.description}</p>
        <button className="cart-icon" onClick={() =>addToCart(view)}><FontAwesomeIcon icon={faShoppingCart} /></button>
      </div>
    </div>
  );
};

export default ViewSinglePd;
