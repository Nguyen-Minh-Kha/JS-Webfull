import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Acceuil";
import Connexion from "./Components/Connexion";
import Inscription from "./Components/Inscription";
import Navbar from "./Components/Navbar";
import UserContext from "./Contexts/UserContext";
import { useState } from "react";
import Annonce from "./Components/Annonce";
import Detail from "./Components/Detail";

export default function App() {
  const initToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  const [token, setToken] = useState(initToken);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token: token, setToken: setToken }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/annonce" element={<Annonce />} />
          <Route path="/annonce/:id" element={<Detail />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
