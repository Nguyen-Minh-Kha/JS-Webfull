import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Acceuil";
import Connexion from "./Components/Connexion";
import Inscription from "./Components/Inscription";
import Navbar from "./Components/Navbar";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token: token, setToken: setToken }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
