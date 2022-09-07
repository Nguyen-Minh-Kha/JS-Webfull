import React from "react";
import { useState } from "react";
export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let user = { email, password };
    console.log(user);
  };
  return (
    <>
      <h1>Page Connexion</h1>
      <br />
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="pass"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button> Submit </button>
      </form>
    </>
  );
}
