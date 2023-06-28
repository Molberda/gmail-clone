import React from "react";
import "./CSS/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
        <Header />
        <Sidebar/>
        <h1 className="title">lets build gmail</h1>
    </div>
  );
}

export default App;
