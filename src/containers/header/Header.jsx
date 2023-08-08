import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assests/babel.png";
import Modal from "../modal/Modal";
const Header = () => {
  // get user
  const [auth, setAuth] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      console.log(content);
      setAuth("Logout");
    })();
  });

  const handleLogout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    setAuth("");
    return true;
  };

  // set login/logout test based if user is authorized
  let menu;
  if (auth === "") {
    menu = (
      <div
        className="auth__link"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Login
      </div>
    );
  } else {
    menu = (
      <div className="auth__link" onClick={handleLogout}>
        Logout
      </div>
    );
  }

  return (
    <div className="header__container">
      {menu}
      <img className="logo" src={logo} alt="logo" />
      <Modal />
    </div>
  );
};

export default Header;
