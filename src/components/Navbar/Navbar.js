/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Clean Creations
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              {user && <li className="nav-item">
              <Link className="nav-link" to="/track">
                Track
              </Link>
            </li>}
              <li className="nav-item">
                {user ? (
                  <div>
                  <img style={{ width:"40px", borderRadius:"50%"}} src={user.photoURL} alt="" />
                    <span className="mx-2">{user.displayName}</span>
                    <button
                      className="mt-2 border-0 mx-2"
                      onClick={() => signOut(auth)}
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
