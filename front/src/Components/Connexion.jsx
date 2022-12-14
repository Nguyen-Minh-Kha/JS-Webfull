import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import UserContext from "../Contexts/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken } = useContext(UserContext);
  /* console.log(token); */

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    let user = { email, password };
    /* console.log(user); */
    axios
      .post("/api/user/login", user)
      .then((response) => {
        /* console.log(response); */
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        navigate("/annonce");
      })
      .catch((e) => {
        console.log(e);
      });
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
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button> Submit </button>
      </form>
    </>
  );
}
