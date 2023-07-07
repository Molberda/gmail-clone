import React from "react";
import "../CSS/Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {

    const dispatch = useDispatch()
  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(({ user }) => {
      dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }));
    });
    
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
        <Button onClick={() => signIn()}>Login</Button>
      </div>
    </div>
  );
};

// https://youtu.be/b7nrXjS6Dqs?t=14874

export default Login;
