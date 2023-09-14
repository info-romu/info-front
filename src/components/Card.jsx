import React from "react";

const Card = ({ item }) => {
  return (
    <div>
      <div>
        <h6>{item.name}</h6>
        <p>{item.description}</p>

        <ul>
          <li>Prix: {item.price} €</li>
        </ul>
      </div>
      <button href={`/properties/${item.id}`}>
        Voir plus
      </button>
    </div>
  );
};

export default Card;
