import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState({});

  /* console.log(id); */

  useEffect(() => {
    axios
      .get(`/api/annonce/${id}`)
      .then((res) => {
        /* console.log(res.data); */
        setAnnonce(res.data);
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
        <li>{annonce.idClient}</li>
        <li>{annonce.createdAt}</li>
        <li>{annonce.updatedAt}</li>
      </ul>
    </>
  );
}
