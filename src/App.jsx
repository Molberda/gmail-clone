import React from "react";
import "./CSS/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from './features/mailSlice'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
            <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList/>}/>
            <Route path="/mail" element={<Mail/>}/>
          </Routes>
        </div>
      {sendMessageIsOpen && <SendMail/>}
      </div>
    </Router>
  );
}

// https://youtu.be/b7nrXjS6Dqs?t=11955

export default App;
