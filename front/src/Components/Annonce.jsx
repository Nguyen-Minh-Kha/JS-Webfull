import React from "react";
import { useState } from "react";
/* import axios from "axios"; */

export default function Annonce() {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [qteDispo, setQteDispo] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let annonce = { nom, prix, description, photo, qteDispo };
    console.log(annonce);
    /* axios
      .post("http://localhost:5000/api/annonce", annonce)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      }); */
  };

  return (
    <>
      <h1>Créer une annonce</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="nom"
          value={nom}
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
          value={photo}
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
