import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./viewSinglePd.css";

const ViewSinglePd = ({ product , addToCart }) => {
  return (
    <div className="menu shadow border d-flex">
      <div>
        <img src={product.img} alt="img" />
      </div>
      <div className="ms-2 p-2">
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <button className="cart-icon" onClick={() =>addToCart(product)}><FontAwesomeIcon icon={faShoppingCart} /></button>
      </div>
    </div>
  );
};

export default ViewSinglePd;
