import React from "react";


const Card = ({ item }) => {

  return (
    <div className="card">
      <div className="card_body">
        <div className="card_face face1">
          <div className="card_content">
            <h6 className="Item_name">{item.name}</h6>
            <p className="Item_description">{item.description}</p>
            <p className="Item_price">Prix: {item.price} €</p>
            <button href={`/properties/${item.id}`} className="button_addtocart"> Ajouter au panier</button>
          </div>
        </div>
        <div className="card_face face2">
        <img alt="ici la photo" src={item.imageUrl} />
        </div>       
      </div>
    </div>
  );
};

export default Card;
