import React from "react";
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <a className="navbar-brand" >
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link"> Home</Link>

          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link"> Add Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link"> About</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: "My App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
