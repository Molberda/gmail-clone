import React, { useEffect, useState } from "react";
import "../CSS/EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section icon={<Inbox />} title="primary" color="red" selected />
        <Section icon={<People />} title="social" color="#1A73E8" />
        <Section icon={<LocalOffer />} title="promotion" color="green" />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow 
          id={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="twitch"
          subject="hey fellow steamer!!!"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey fellow steamer!!!"
          description="this is a test"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
