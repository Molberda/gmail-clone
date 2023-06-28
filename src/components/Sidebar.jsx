import React from "react";
import "../CSS/Sidebar.css";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<Add fontSize="large"  />}>
        Compose
      </Button>
    </div>
  );
};

export default Sidebar;
