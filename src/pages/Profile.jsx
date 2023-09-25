import React, { useEffect, useState } from "react";
import config from "../../config";
import Cookies from "js-cookie";

export default function Profile () {

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/cart_items`)
        .then((response) => response.json())
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des propriétés :", error);
        });
}, []);


  return (
    <div className="dashboard">
        <header className="dashboard_header">
          <h2>Mon compte</h2>
        </header>
        <div className="dashboard_content">
          <aside className="sidebar">
              <ul>
                <li><a href="/">mes informations</a></li>
                <li><a href="/orders">mes commandes</a></li>
                <li><a href="/profile">mes demandes de devis</a></li>
                <li><a href="/profile">Besoin d'aide ?</a></li>
                <li><a href="/profile">Se déconnecter</a></li>
                {/* Ajoutez d'autres liens de la barre latérale ici */}
              </ul>
          </aside>
          <main className="dashbord_content">
            <h2>Contenu de la page</h2>
            {/* Le contenu de la page du tableau de bord va ici */}
          </main>
        </div>
      </div>
    );
  }


