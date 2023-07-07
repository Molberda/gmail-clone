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
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Header = () => {

  const user = useSelector(selectUser)

  const signOut = () => {



  }

  return (
    <header>
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
            <Avatar onClick={signOut} src={user?.photoUrl}/>
          </div>
    </header>
  );
};

export default Header;
