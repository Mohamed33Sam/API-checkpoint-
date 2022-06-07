import { Link } from "react-router-dom";
import React from "react";
import { ImHome } from "react-icons/im";
import { FaRegAddressBook } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <FaRegAddressBook />
        User list
      </h1>
      <div>
        <ImHome />
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
