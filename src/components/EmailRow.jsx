import React from "react";
import "../CSS/EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";

const EmailRow = ({ title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
