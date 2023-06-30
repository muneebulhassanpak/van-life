import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center max-w-5xl m-auto p-4">
      <h3 className="flex-1 font-extrabold text-2xl">
        <Link to="/">#VANLIFE</Link>
      </h3>
      <nav className="flex-1">
        <ul className="flex justify-end">
          <li>
            <Link to="/about" className="font-medium">
              About
            </Link>
          </li>
          <li className="ml-7">
            <Link to="/vans" className="font-medium">
              Vans
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
