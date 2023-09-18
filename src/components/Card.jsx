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
            <button href={`/properties/${item.id}`} className="button_addtocart">Voir plus</button>
          </div>
        </div>
        <div className="card_face face2">
          {/* <p>01</p> */}
          <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="ici la photo"></img>
        </div>       
      </div>
    </div>
  );
};

export default Card;
