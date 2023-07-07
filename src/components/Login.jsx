import React from "react";
import "../CSS/Login.css";
import { Button } from "@mui/material";
import { auth } from "../firebase";

const Login = () => {
    const signIn = () => {
        auth
    }
  return (
    <div className="login">
      <div className="login__container">
        <figure>
          <img
            src="https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
            alt=""
          />
        </figure>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Login;
