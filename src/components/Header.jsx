import React from "react";
import "../CSS/Header.css";
import { Menu } from "@mui/icons-material";

const Header = () => {
  return (
    <header>
      <div className="header__left">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
