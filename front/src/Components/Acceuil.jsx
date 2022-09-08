import React from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Acceuil() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/annonce")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Acceuil</div>;
}
