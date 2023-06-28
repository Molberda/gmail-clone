import React from "react";
import "../CSS/Header.css";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="row header__row">
          <div className="header__left">
            <IconButton>
              <Menu />
            </IconButton>
            <img
              src="https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
              alt=""
            />
          </div>

          <div className="header__middle">
            <Search />
            <input placeholder="Search Mail" type="text" />
            <ArrowDropDown className="header__inputCaret" />
          </div>

          <div className="header__right">
            <IconButton>
              <Apps />
            </IconButton>
            <IconButton>
              <Notifications />
            </IconButton>
            <Avatar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
