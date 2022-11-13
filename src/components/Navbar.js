import React from "react";
import cardimg from "../images/myAvatar.png";
import { Link } from "react-router-dom";

//a anchor href
// Link to a

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={cardimg} alt="LOGO" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Go to Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
