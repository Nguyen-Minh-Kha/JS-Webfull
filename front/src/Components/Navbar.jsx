import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Acceuil </Link>
        </li>
        <li>
          <Link to="/connexion"> Connexion </Link>
        </li>
        <li>
          <Link to="/inscription"> Incription </Link>
        </li>
      </ul>
    </nav>
  );
}
