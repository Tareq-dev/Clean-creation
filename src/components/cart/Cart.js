import React from "react";
import "./Cart.css";

const Cart = ({item}) => {
  const { name, img } = item;
  return (
    <div>
      <ul className="shadow list-unstyled ">
        <li className="border d-flex">
          <img className="w-25" src={img} alt="img" />
          <div>
            <h4 className="ps-2">{name}</h4>
            <p>Price : ${}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
