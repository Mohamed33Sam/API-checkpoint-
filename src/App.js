import React, { useState } from "react";
import "./App.css";
import Navbar from "./Compontes/Navbar";
import User from "./Compontes/UserList";
import Details from "./Compontes/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="details/:userId" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
