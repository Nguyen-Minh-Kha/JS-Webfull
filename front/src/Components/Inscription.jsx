import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Inscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    let user = { nom, prenom, email, password };
    /* console.log(user); */
    axios
      .post("/api/user/signup", user)
      .then((response) => {
        /* console.log(response); */
        navigate("/connexion");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>Page Inscription</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="prenom"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button> Submit </button>
      </form>
    </>
  );
}
