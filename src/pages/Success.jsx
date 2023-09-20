import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Success() {

  useEffect(() => {
    try {
      const token = Cookies.get("token");
      const response = fetch(`http://127.0.0.1:3000/success`, {
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
