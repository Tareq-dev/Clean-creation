import "./Login.css";
import auth from "../Firebase/firebase.init";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const location = useLocation();


  const from = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(from , {replace:true});
  }
  const handleUserLogging = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-5 pt-5">
        <div className="login p-5">
          <h3 className="text-center">Login</h3>
          <form onSubmit={handleUserLogging}>
            <label htmlFor="email">Your email address</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-100 rounded-3 border-0 py-1"
              type="email"
              name="email"
              id=""
              required
            />
            <br />
            <label htmlFor="password">Your password</label>
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-100 rounded-3 border-0 py-1"
              type="password"
              name="password"
              id=""
              required
            />
            <br />
            <span>{error}</span>
            <button className="w-100 mt-3 text-light fw-bold bg-dark">
              Login
            </button>
            <div className="d-flex mt-1">
              <p>Don't have an acount?</p>
              <Link className="mx-1" to="/signup">
                Create a new account
              </Link>
            </div>
          </form>
          <br />
          <div className="text-center text-secondary mb-4">
            __________ or __________
          </div>
          <div className="d-flex rounded-3">
            <div className="d-flex">
              <img
                style={{ width: "30px", height: "30px" }}
                src={facebook}
                alt=""
              />
              <button
                onClick={() => signInWithFacebook()}
                className="mx-2 border-0 border-radius px-4 fw-bold"
              >
                Facebook
              </button>
            </div>
            <div className="d-flex mx-2">
              <img
                style={{ width: "30px", height: "30px" }}
                src={google}
                alt=""
              />
              <button
                onClick={() => signInWithGoogle()}
                className="mx-2 border-0 border-radius px-4 fw-bold"
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <img className="mb-5" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
