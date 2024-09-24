import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./Components/Login/Login";
import { Dashboard } from "@mui/icons-material";
import Dash from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Example />} />
          <Route path="/Dashboard" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
