import React from "react";
import "./CSS/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
