import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Acceuil";
import Connexion from "./Components/Connexion";
import Inscription from "./Components/Inscription";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import UserContext from "./Contexts/UserContext";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <UserContext.Provider value={{ token: token, setToken: setToken }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
