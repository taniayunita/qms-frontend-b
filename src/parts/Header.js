import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
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
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/beranda")}`}>
                  <Button className="nav-link" type="link" href="/beranda">
                    Beranda
                  </Button>
                </li>
                <li
                  className={`nav-item${getNavLinkClass("/booking-antrian")}`}
                >
                  <Button
                    className="nav-link"
                    type="link"
                    href="/booking-antrian"
                  >
                    Book Nomor Antrian
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/daftar-bank")}`}>
                  <Button className="nav-link" type="link" href="/daftar-bank">
                    Daftar Bank & Info Antrian
                  </Button>
                </li>
                <li className={`nav-item`}>
                  <Link to="/">
                    <Button className="btn ml-2" hasShadow isPrimary onClick={() => localStorage.clear()}>
                      Sign Out
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
