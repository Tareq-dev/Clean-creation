import React from "react";
import './Login.css'
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";



const Login = () => {
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <div>
      <div className="border rounded-3 login p-5">
        <h3 className="text-center">Login</h3>
        <div className="p-5">
          <div className="d-flex">
            <img style={{ width: "30px" }} src={google} alt="" />
            <button className="mx-2 border-0 border-radius px-4 fw-bold">Sign in with Google</button>
          </div>
          <div className="d-flex mt-4">
            <img style={{ width: "32px" }} src={facebook} alt="" />
            <button className="mx-2 border-0 border-radius px-4 fw-bold">Sign in with Facebook</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
