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
    <section className="boutique">
      <h2 className='mb-10 text-center text-5xl'>Notre boutique</h2>
        <AlertAddToCart showAlert={showAlert} setShowAlert={setShowAlert} />
        <div className="card_container">
          {items.map((item) => (
            <Card key={item.id} item={item} setShowAlert={setShowAlert} />
          ))}
        </div>
    </section>
      
    </>
  );
}