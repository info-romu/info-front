import React from "react";
import Cookies from "js-cookie";
import config from "../../config";
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { useNavigate } from 'react-router-dom';

const Card = ({ item, setShowAlert }) => {
  const [user] = useAtom(userAtom);
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate('/login');
  };

  const addToCart = (itemId) => {
    const userId = Cookies.get("id");

    fetch(`${config.API_BASE_URL}/cart_items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_id: userId,
        item_id: itemId,
        quantity: 1,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setShowAlert(true); 
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
        <div className="item">
          <div className="item_container">
            <img
              className="item_container_img"
              alt="Image d'un produit en vente par Inforomu"
              src={item.imageUrl}
            />
          </div>
          <h6 className="item_name">{item.name}</h6>
          <p className="item_description">{item.description}</p>
          <p className="item_price">Prix: {item.price} €</p>
        </div>
        {user.isLogged ? (
          <div onClick={() => addToCart(item.id)} className="button_addtocart">
            <p >Ajouter au panier</p>
          </div>
        ) : (
          <div onClick={handleClick} className="button_addtocart">
            <p>Ajouter au panier</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
