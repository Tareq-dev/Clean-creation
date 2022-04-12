import React from "react";
import { useState } from "react";
import auth from "../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error] = useState("");

  const handleShipment = (event) => {
    event.preventDefault();
    const shipping = { name, email, phone, address };
    console.log(shipping);
  };
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <form onSubmit={handleShipment} className="login p-5">
        <label htmlFor="name">Your name</label>
        <br />
        <input
          onBlur={(event) => setName(event.target.value)}
          className="w-100 rounded-3 border-0 py-1"
          type="text"
          name="name"
          id=""
          required
        />
        <br />
        <label htmlFor="email">Your email address</label>
        <br />
        <input
          value={user?.email}
          className="w-100 rounded-3 border-0 py-1"
          type="email"
          name="email"
          id=""
          required
        />
        <br />
        <label htmlFor="address">Your address</label>
        <br />
        <input
          onChange={(e) => setAddress(e.target.value)}
          className="w-100 rounded-3 border-0 py-1"
          type="address"
          name="address"
          id=""
          required
        />
        <br />
        <label htmlFor="text">Your Phone No</label>
        <br />
        <input
          onChange={(e) => setPhone(e.target.value)}
          className="w-100 rounded-3 border-0 py-1"
          type="text"
          name="text"
          id=""
          required
        />
        <br />
        <span className="text-danger fw-bold">{error}</span>
        <button className="w-100 mt-3 text-light fw-bold bg-dark">
          Shipping
        </button>
      </form>
    </div>
  );
};

export default Shipment;
