import React from "react";
import "../CSS/EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import { LabelImportantOutlined, StarBorderOutlined } from "@mui/icons-material";

const EmailRow = ({ title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox/>
        <IconButton>
            <StarBorderOutlined/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlined/>
        </IconButton>
      </div>
      <div className="emailRow__title"></div>
      <div className="emailRow__message"></div>
      <div className="emailRow__description"></div>
    </div>
  );
};

export default EmailRow;
