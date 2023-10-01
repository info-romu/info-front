import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import config from "../../config";
import AlertAddToCart from "../components/AlertAddToCart";


export default function MarketPlace() {
  const [items, setItems] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/items`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des propriétés :", error);
      });
  }, []);

  return (
    <>
      <div className="title-market"><p>Notre Boutique</p></div>
      <AlertAddToCart showAlert={showAlert} setShowAlert={setShowAlert} />
      <div className="card_container">
        {items.map((item) => (
          <Card key={item.id} item={item} setShowAlert={setShowAlert} />
        ))}
      </div>
    </>
  );
}