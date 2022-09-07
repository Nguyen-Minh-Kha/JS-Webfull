import React from "react";
import { useState } from "react";

export default function Inscription() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let user = { nom, prenom, email, password };
    console.log(user);
  };

  return (
    <>
      <h1>Page Inscription</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Jean"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Paul"
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
