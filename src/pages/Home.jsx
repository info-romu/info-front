import React from "react";
import ImagePresentation from "../assets/Construction.jpeg"

export default function Home() {

  return (
    <section className="presentation md:flex">
      <div className="container_presentation md:w-3/6">
        <img className="container_presentation_img min-h-96 md:min-h-full" src={ImagePresentation} alt="" />
        <h2 className="container_presentation_text">Text / Presentation</h2>
      </div>
      <div className="container_description md:w-3/6">
        <div className="container_top">
          <h2 className="container_top_text text-center	">Installation de borne de recharge pour véhicules éléctriques</h2>
        </div>
        <div className="container_bottom">
          <button className="container_bottom_button">Faire une simulation</button>
          <button className="container_bottom_button">Nos services</button>
        </div>
      </div>
    </section>
  );
}
