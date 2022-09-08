import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AnnonceContainer from "../Container/AnnonceContainer";

export default function Acceuil() {
  const [annonce, setAnnonce] = useState([]);

  useEffect(() => {
    axios
      .get("/api/annonce")
      .then((res) => {
        console.log(res.data);
        setAnnonce(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {annonce.map((data) => {
        return (
          <AnnonceContainer
            nomProduit={data.nomProduit}
            prix={data.prix}
            /* description={data.description}
          photoProduit={data.photoProduit}
          qteDispo={data.qteDispo}
          idClient={data.idClient}
          createdAt={data.createdAt}
          updatedAt={data.updatedAt} */
          />
        );
      })}
    </>
  );
}
