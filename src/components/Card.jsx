import React from "react";
import Cookies from 'js-cookie';
import config from '../../config'



const Card = ({ item }) => {

  const addToCart = (itemId) => {
    const userId = Cookies.get('id')
    
    fetch(`${config.API_BASE_URL}/cart_items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        "cart_id": userId,
        "item_id": itemId,
        "quantity": 1
    } ),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Article ajouté au panier !");
        } else {
          console.error("Erreur lors de l'ajout de l'article au panier.");
        }
      })
      .catch((error) => {
        console.error("Erreur de réseau :", error);
      });
  };


  return (
    <div className="card">
      <div className="card_body">
        <div className="card_face face1">
          <div className="item">
            <h6 className="item_name">{item.name}</h6>
            <p className="item_description">{item.description}</p>
            <p className="item_price">Prix: {item.price} €</p>
            <button onClick={() => addToCart(item.id)} className="button_addtocart">
             Ajouter au panier</button>
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
