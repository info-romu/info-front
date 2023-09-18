import React, { useEffect, useState } from "react";
import Card from "../components/Card";



export default function MarketPlace() {
  const [items, setItems] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:3000/items")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setItems(data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des propriétés :", error);
    });
}, []);

return (
  <>
    <h2>Notre Boutique</h2>
      <div>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
  </>
  );
}