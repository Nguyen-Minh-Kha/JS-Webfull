import React from "react";
import { Link } from "react-router-dom";

export default function AnnonceContainer({
  id,
  nomProduit,
  prix,
  description,
  photoProduit,
  qteDispo,
  idClient,
  createdAt,
  updatedAt,
  isUser,
}) {
  return (
    <>
      <ul id={id}>
        <li>{nomProduit}</li>
        <li>{prix}</li>
        {description ? <li>{description}</li> : ""}
        {photoProduit ? <li>{photoProduit}</li> : ""}
        {qteDispo ? <li>{qteDispo}</li> : ""}
        {idClient ? <li>{idClient}</li> : ""}
        {createdAt ? <li>{createdAt}</li> : ""}
        {updatedAt ? <li>{updatedAt}</li> : ""}
      </ul>
      {isUser ? (
        <button>
          <Link to={`/annonce/${id}`}> détail </Link>
        </button>
      ) : (
        <button>
          <Link to={`/annonce/${id}`}> acheter </Link>
        </button>
      )}
    </>
  );
}
