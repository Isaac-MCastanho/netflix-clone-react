import React from "react";
import "./Header.css";
import Netflix_2015_logo from "../../assets/img/Netflix_2015_logo.svg";
import User from "../../assets/img/user.png";

export const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={Netflix_2015_logo} alt="Logo do Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={User} alt="Usuario" />
        </a>
      </div>
    </header>
  );
};
