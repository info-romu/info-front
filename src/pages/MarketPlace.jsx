import React, { useEffect, useState } from "react";
import Card from "../components/Card";



export default function MarketPlace() {
  const [items, setItems] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:3000/items")
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
      <div className="card_container">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
  </>
  );
}