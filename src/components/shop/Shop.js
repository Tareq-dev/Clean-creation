import React, { useEffect, useState } from "react";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ViewSinglePd from "../viewSingleProduct/ViewSinglePd";
import Cart from "../cart/Cart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (!exist) {
      const newCart = [...cart, product];
      if (newCart.length < 5) {
        setCart(newCart);
      } else {
        Swal.fire({
          icon: "error",
          title: "sorry...",
          text: "You have to add 4 items!",
        });
      }
    }
  };
//when you need to delete item by clicking please send the parameter of these name which you pass in the cart component; 

  const handleDelete = (item) => {
    const rest = cart.filter((pd) => pd.id !== item.id);
    setCart(rest);
  };
  const placeOrderbtn = () => {
    if (cart.length === 4) {
      navigate("/shipment");
    } else {
      alert("need Four Meal");
    }
  };
  return (
    <div>
      <h1 className="text-center">Menus</h1>
      <div className="canvas">
        <div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-color"
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
            className="offcanvas offcanvas-end canvas-scroll p-2"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Cart Info</h5>

              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {cart.map((item) => (
              <Cart key={item.id} item={item} handleDelete={handleDelete} />
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
              <hr />
              <div className="d-flex justify-content-center">
                <button
                  onClick={placeOrderbtn}
                  className="border-0 px-2 fs-6 place-order-btn"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="views p-3">
          {products.map((pd) => (
            <ViewSinglePd addToCart={addToCart} key={pd.id} product={pd} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
