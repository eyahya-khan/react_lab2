import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/welcome">ITHögskolan Lab-2</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/usememo">useMemo</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
