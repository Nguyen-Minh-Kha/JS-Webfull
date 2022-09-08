import React from "react";

export default function AnnonceContainer({
  nomProduit,
  prix,
  description,
  photoProduit,
  qteDispo,
  idClient,
  createdAt,
  updatedAt,
}) {
  return (
    <>
      <ul>
        <li>{nomProduit}</li>
        <li>{prix}</li>
        {description ? <li>{description}</li> : ""}
        {photoProduit ? <li>{photoProduit}</li> : ""}
        {qteDispo ? <li>{qteDispo}</li> : ""}
        {idClient ? <li>{idClient}</li> : ""}
        {createdAt ? <li>{createdAt}</li> : ""}
        {updatedAt ? <li>{updatedAt}</li> : ""}
      </ul>
    </>
  );
}
