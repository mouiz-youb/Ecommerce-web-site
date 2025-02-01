import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
