import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ViewSinglePd from "../viewSingleProduct/ViewSinglePd";
import "./View.css";

const View = () => {
  const [views, setViews] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setViews(data));
  }, []);

  const addToCart = (view) => {
    const newCart = [...cart, view];
    newCart.map((cartInfo) => console.log(cartInfo));
    setCart(newCart);
  };
  return (
    <div className="">
      <h1 className="text-center">View More</h1>
      <div className="canvas d-flex justify-content-end">
        <button
          class="btn btn-color"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>
            <small className="counter bg-danger">{cart.length}</small>
          </p>
        </button>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Cart Info</h5>

          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="">
            <p>Sellected Items : </p>
          </div>
        </div>
      </div>
      <div className="views p-5 m-5">
        {views.map((view) => (
          <ViewSinglePd addToCart={addToCart} key={view.id} view={view} />
        ))}
      </div>
    </div>
  );
};

export default View;
