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
  const cDate = new Date(createdAt);
  const uDate = new Date(updatedAt);
  return (
    <>
      <ul id={id}>
        <li>{nomProduit}</li>
        <li>{prix}</li>
        {description ? <li>{description}</li> : ""}
        {photoProduit ? <li>{photoProduit}</li> : ""}
        {qteDispo ? <li>{qteDispo}</li> : ""}
        {idClient ? <li>{idClient}</li> : ""}
        {createdAt ? (
          <li>
            {cDate.getDate()} / {cDate.getMonth() + 1} / {cDate.getFullYear()}
          </li>
        ) : (
          ""
        )}
        {updatedAt ? (
          <li>
            {uDate.getDate()} / {uDate.getMonth() + 1} / {uDate.getFullYear()}
          </li>
        ) : (
          ""
        )}
      </ul>
      {isUser ? (
        <>
          <button>
            <Link to={`/annonce/${id}`}> détail </Link>
          </button>
        </>
      ) : (
        <button>
          <Link to={`/annonce/${id}`}> acheter </Link>
        </button>
      )}
    </>
  );
}
