import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card_container">
      <div className="card_container_body">
        <div className="card_face face1">
          <div className="card_content">
            <h6>{item.name}</h6>
            <p>{item.description}</p>
            <p>Prix: {item.price} €</p>
            <button href={`/properties/${item.id}`}>Voir plus</button>
          </div>
        </div>
        <div className="card_face face2">
          <img src="#" alt="ici la photo"></img>
        </div>       
      </div>
    </div>
  );
};

export default Card;
