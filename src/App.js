import React from "react";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NoMatchPage from "./pages/NoMatch";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>
  );
}

export default App;
