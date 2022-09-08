import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import UserContext from "../Contexts/UserContext";

export default function Annonce() {
  const [nomProduit, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [photoProduit, setPhoto] = useState("");
  const [qteDispo, setQteDispo] = useState("");

  const { token, setToken } = useContext(UserContext);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const submit = (e) => {
    e.preventDefault();
    let annonce = { nomProduit, prix, description, photoProduit, qteDispo };
    /* console.log(annonce); */
    axios
      .post("/api/annonce", annonce, config)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>Créer une annonce</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="nom"
          value={nomProduit}
          onChange={(event) => setNom(event.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="prix"
          value={prix}
          onChange={(event) => setPrix(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Lien vers votre photo"
          value={photoProduit}
          onChange={(event) => setPhoto(event.target.value)}
        />
        <br />
        <input
          type="test"
          placeholder="Quantité disponible"
          value={qteDispo}
          onChange={(event) => setQteDispo(event.target.value)}
        />
        <button> Submit </button>
      </form>
    </>
  );
}
