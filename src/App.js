import React from "react";
import "./App.css";
import "./index.css";
import HomePage from "./components/homePage";
import Login from "./components/login";
// import SearchForm from "./components/SearchForm";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
