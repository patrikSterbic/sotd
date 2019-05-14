import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import "./header.scss";

import LogoImg from "../images/logo.png";

const Header = () => (
  <header>
    <div className="content">
      <div className="logo">
        <Link to="/">
          <img src={LogoImg} alt="logo" className="logo-img" />
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/novinky">
            <div className="nav-text" data-text="Novinky">
              Novinky
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bio">
            <div className="nav-text" data-text="Bio">
              Bio
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/stage-plan">
            <div className="nav-text" data-text="Stage Plán">
              Stage Plán
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/setlist">
            <div className="nav-text" data-text="Set List">
              Set List
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/galerie">
            <div className="nav-text" data-text="Galerie">
              Galerie
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/koncerty">
            <div className="nav-text" data-text="Koncerty">
              Koncerty
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/kontakty">
            <div className="nav-text" data-text="Kontakty">
              Kontakty
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
