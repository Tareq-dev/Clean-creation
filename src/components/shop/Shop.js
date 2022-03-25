import React, { useEffect, useState } from "react";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ViewSinglePd from "../viewSingleProduct/ViewSinglePd";
import Cart from "../cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <h1 className="text-center">View More</h1>
      <div className="canvas">
        <div>
          <div className="d-flex justify-content-end ">
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
            class="offcanvas offcanvas-end canvas-scroll p-2"
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
            {cart.map((item) => (
              <Cart key={item.id} item={item} />
            ))}
            <div>
              <hr />
              <div className="cart">
                <h4>Order Samary</h4>
                <p>Selected Items : {}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax : ${}</p>
                <h4>Grand Total : ${}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="views p-5 m-5">
          {products.map((pd) => (
            <ViewSinglePd addToCart={addToCart} key={pd.id} product={pd} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
