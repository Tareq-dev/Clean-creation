import React, { useState } from "react";
import "./Login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import Navbar from "../Navbar/Navbar";
import FirebaseApp from "../Firebase/firebase";

FirebaseApp();
const Login = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const Gprovider = new GoogleAuthProvider();
  const FbProvider = new FacebookAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, Gprovider).then((res) => setUser(res.user));
  };
  const handleFacebookLogin = () => {
    signInWithPopup(auth, FbProvider).then((res) => console.log(res.user));
  };
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div>
          <div className="border rounded-3 login p-5">
            <h3 className="text-center">Login</h3>
            <div className="p-5">
              <div className="d-flex">
                <img style={{ width: "30px" }} src={google} alt="" />
                <button
                  className="mx-2 border-0 border-radius px-4 fw-bold"
                  onClick={handleGoogleLogin}
                >
                  Sign in with Google
                </button>
              </div>
              <div className="d-flex mt-4">
                <img style={{ width: "32px" }} src={facebook} alt="" />
                <button className="mx-2 border-0 border-radius px-4 fw-bold" onClick={handleFacebookLogin}>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
      <div>
        <img className="mb-5" src={user.photoURL} alt="" />
        <h4>{user.displayName}</h4>
      </div>
    </div>
    </>
  );
};

export default Login;
