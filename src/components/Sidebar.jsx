import React from "react";
import "../CSS/Sidebar.css";
import { Button, IconButton } from "@mui/material";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {

  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button onClick={() => dispatch(openSendMessage())} className="sidebar__compose" startIcon={<Add fontSize="large" />}>
        Compose
      </Button>

      <SidebarOption
        Icon={<Inbox />}
        title="inbox"
        number={54}
        selected={true}
      />
      <SidebarOption
        Icon={<Star />}
        title="starred"
        number={32}
        selected={false}
      />
      <SidebarOption
        Icon={<AccessTime />}
        title="snoozed"
        number={32}
        selected={false}
      />
      <SidebarOption
        Icon={<LabelImportant />}
        title="important"
        number={32}
        selected={false}
      />
      <SidebarOption
        Icon={<NearMe />}
        title="sent"
        number={32}
        selected={false}
      />
      <SidebarOption
        Icon={<Note />}
        title="drafts"
        number={32}
        selected={false}
      />
      <SidebarOption
        Icon={<ExpandMore />}
        title="more"
        number={32}
        selected={false}
      />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
            <IconButton>
                <Person/>
            </IconButton>
            <IconButton>
                <Duo/>
            </IconButton>
            <IconButton>
                <Phone/>
            </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
