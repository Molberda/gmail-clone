import React from "react";
import "../CSS/Sidebar.css";
import { Button } from "@mui/material";
import { Add, Inbox, Star } from "@mui/icons-material";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<Add fontSize="large"  />}>
        Compose
      </Button>

      <SidebarOption Icon={<Inbox/>} title='inbox' number={54} selected={true} />
      <SidebarOption Icon={<Star/>} title='starred' number={32} selected={false} />
    </div>
  );
};

export default Sidebar;
