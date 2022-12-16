import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

import CartSection from "../components/CartSection";

export default function Header() {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src="/imgs/logoremove.png" className="logo" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Jewellary">
                  Jewellary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cloths">
                  Cloths
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Electronics">
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <Link className="nav-link" to="/Cartitem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
            <button className="cartbutton">{items.length}</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
