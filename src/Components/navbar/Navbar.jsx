import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#home">War</a>
    </p>
    <p>
      <a href="#home">Sports</a>
    </p>
    <p>
      <a href="#home">Crypto</a>
    </p>
    <p>
      <a href="#home">Travel</a>
    </p>
    <p>
      <a href="#home">Most Read</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="news__navbar">
      <div className="news__navbar-links">
        <div className="news__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#327049"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#327049"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
