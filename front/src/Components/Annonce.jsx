import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AnnonceContainer from "../Container/AnnonceContainer";

export default function Annonce() {
  const [nomProduit, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [photoProduit, setPhoto] = useState("");
  const [qteDispo, setQteDispo] = useState("");
  const [id, setid] = useState("");

  const { token, setToken } = useContext(UserContext);

  const [annonceUser, setAnnonceUser] = useState([]);

  const navigate = useNavigate();

  const isUser = true;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    if (!token) {
      navigate("/connexion");
    }
    axios
      .get("/api/annonce/getAnnonceUser", config)
      .then((res) => {
        /* console.log(res.data); */
        setAnnonceUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    let annonce = { nomProduit, prix, description, photoProduit, qteDispo };
    /* console.log(annonce); */
    axios
      .post("/api/annonce", annonce, config)
      .then((response) => {
        setAnnonceUser([response.data, ...annonceUser]);
        setNom("");
        setPrix("");
        setDescription("");
        setPhoto("");
        setQteDispo("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteAnnonce = (id) => {
    axios
      .delete(`/api/annonce/${id}`, config)
      .then((response) => {
        /* console.log(response); */
        setAnnonceUser(annonceUser.filter((annonce) => annonce._id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateForm = (annonce) => {
    setNom(annonce.nomProduit);
    setPrix(annonce.prix);
    setPhoto(annonce.photoProduit);
    setQteDispo(annonce.qteDispo);
    setDescription(annonce.description);
    setid(annonce._id);
  };

  const updateAnnonce = (id) => {
    let annonce = { nomProduit, prix, description, photoProduit, qteDispo };
    axios
      .put(`/api/annonce/${id}`, annonce, config)
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
      <form>
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
        <button onClick={submit}> Submit </button>
        <button onClick={() => updateAnnonce(id)}>Update</button>
      </form>

      {annonceUser.map((data) => {
        return (
          <div>
            <AnnonceContainer
              id={data._id}
              nomProduit={data.nomProduit}
              prix={data.prix}
              description={data.description}
              photoProduit={data.photoProduit}
              qteDispo={data.qteDispo}
              /* idClient={data.idClient} */
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              isUser={isUser}
            />
            <button
              onClick={() => {
                deleteAnnonce(data._id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                updateForm(data);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </>
  );
}
