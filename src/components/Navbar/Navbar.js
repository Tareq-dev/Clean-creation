/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
     return (
          <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 px-3">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img style={{width: "50px"}} src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e" alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active bg-info" aria-current="page" href="#">Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sign Up</a>
                </li><li class="nav-item">
                <a class="nav-link" href="#">Log In</a>
              </li>
              </ul>
            </div>
          </div>
        </nav>
          </div>
     )
}

export default Navbar;
