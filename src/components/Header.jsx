import React from "react";
import "../CSS/Header.css";
import { Menu } from "@mui/icons-material";

const Header = () => {
  return (
    <header>
      <div className="header__left">
        <Menu />
      </div>

      <div className="header__middle"></div>

      <div className="header__right"></div>
    </header>
  );
};

export default Header;
