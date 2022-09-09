import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Annonce from "./Annonce";

export default function Detail() {
  const { id } = useParams();

  const [annonce, setAnnonce] = useState({});
  const [user, setUser] = useState({});

  const handleData = (data) => {
    const {
      nomProduit,
      prix,
      description,
      photoProduit,
      qteDispo,
      createdAt,
      updatedAt,
    } = data;
    const {
      idClient: { email, nom, prenom },
    } = data;
    setAnnonce({
      nomProduit,
      prix,
      description,
      photoProduit,
      qteDispo,
      createdAt,
      updatedAt,
    });
    setUser({ email, nom, prenom });
  };

  useEffect(() => {
    axios
      .get(`/api/annonce/${id}`)
      .then((res) => {
        /* console.log(res.data); */
        handleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>{annonce.nomProduit}</h1>
      <ul>
        <li>{annonce.prix}</li>
        <li>{annonce.description}</li>
        <li>{annonce.photoProduit}</li>
        <li>{annonce.qteDispo}</li>
        <li>{annonce.createdAt}</li>
        <li>{annonce.updatedAt}</li>
      </ul>
      <h2>Proprio</h2>
      <ul>
        <li>{user.nom}</li>
        <li>{user.prenom}</li>
        <li>{user.email}</li>
      </ul>
    </>
  );
}
