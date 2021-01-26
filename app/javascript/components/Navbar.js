import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import "./Navbar.css";

function Navbar() {
  const EditLink = (
    <Link className="navbarright MediumSizeNav" to="/Edit">
      Edit
    </Link>
  );
  const PlayLink = (
    <Link className="navbarright MediumSizeNav" to="/Play">
      Play
    </Link>
  );

  return (
    <nav className="fullNav">
      <div className="BigSizeNav hover-nav">{[EditLink, PlayLink]}</div>
    </nav>
  );
}
export default Navbar;
