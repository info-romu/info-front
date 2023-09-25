import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import config from "../../config";


export default function Success() {

  useEffect(() => {
    try {
      const token = Cookies.get("token");
      const response = fetch(`${config.API_BASE_URL}/success`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    } catch (error) {
      console.error("Impossible d'accéder à la méthode success côté serveur, erreur : ", error);
    }
  }, []);

  return (
    <div>Success</div>
  );
}
