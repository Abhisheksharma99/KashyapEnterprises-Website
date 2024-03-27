import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import WhiteLogo from "./WHITE-LOGO-1.png";
const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark text-light navbarbg">
          <div className="container-fluid flex">
            <Link to ="/"className="navbar-brand rounded rounded-3">
              <img src={WhiteLogo} height="80px" width="250px"></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 fw-bold">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link fs-5" aria-current="page" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus">
                    <a className="nav-link fs-5" href="#">
                      About Us
                    </a>
                  </Link>
                </li>
                {/* <i className="fa-solid fa-rectangle-history"></i> */}
                <li className="nav-item dropdown">
                  <Link
                    to="/products"
                    className="nav-link dropdown-toggle products fs-5"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        to="/products"
                        className="dropdown-item productsubhead"
                      >
                        <i
                          className="fa fa-globe"
                          aria-hidden="true"
                          data-bs-toggle="collapse"
                          data-bs-target="navbar-collapse"
                        ></i>
                        &nbsp;All Products
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item productsubhead"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Best Selling"
                        href="/products#defoamers"
                        data-bs-toggle="collapse"
                        data-bs-target="navbar-collapse"
                      >
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                        &nbsp;Defoamer
                        <i
                          className="fa fa-fire ml-5 float-end mt-2"
                          aria-hidden="true"
                          data-bs-toggle="collapse"
                          data-bs-target="navbar-collapse"
                        ></i>
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        className="dropdown-item productsubhead"
                        href="/products#siliconeemulsions"
                      >
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                        &nbsp;Silicon Emulsions
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item productsubhead"
                        href="/products#paperandpulp"
                      >
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                        &nbsp;Paper and Pulp Chemicals
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item productsubhead"
                        href="/products#carcare"
                      >
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                        &nbsp;Car Care Products
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item productsubhead"
                        href="/products#watertreatment"
                      >
                        <i
                          className="fa fa-hand-o-right"
                          aria-hidden="true"
                        ></i>
                        &nbsp;Water Treatment Chemicals
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/contactus">
                    <a
                      className="nav-link fs-5"
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2 navbarbg text-light border-dark"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
