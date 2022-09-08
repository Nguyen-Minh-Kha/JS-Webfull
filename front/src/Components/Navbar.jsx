import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

export default function Navbar() {
  const { token, setToken } = useContext(UserContext);

  const deconnexion = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Acceuil </Link>
        </li>
        {token ? (
          <div>
            <li>
              <Link to="/annonce"> Annonce </Link>
            </li>
            <li>
              <Link to="/" onClick={deconnexion}>
                Deconnexion
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/connexion"> Connexion </Link>
            </li>
            <li>
              <Link to="/inscription"> Incription </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
