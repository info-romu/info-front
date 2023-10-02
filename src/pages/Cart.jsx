import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import config from "../../config";

const Cart = () => {
  const [Items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const stripe = useStripe();

  const handleCheckout = async () => {
    try {
      const token = Cookies.get("token");
      const response = await fetch(`${config.API_BASE_URL}/create_stripe_session`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();

      console.log("Stripe response data : ");
      console.log(responseData);

      const result = await stripe.redirectToCheckout({
        sessionId: responseData.session_id,
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        localStorage.setItem("paymentSuccess", "true");
      }
    } catch (error) {
      console.error("An error occurred during checkout: ", error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');

    fetch(`${config.API_BASE_URL}/cart_items`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        const calculatedTotal = calculateTotal(data);
        setTotal(calculatedTotal);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des items du pannier :", error);
      });
  }, []);


  const calculateTotal = (ItemPrice) => {
    return ItemPrice.reduce((acc, item) => acc + item.item.price, 0);
  };


  const removeItemFromCart = (itemId) => {
    const token = Cookies.get('token');
    fetch(`${config.API_BASE_URL}/cart_items/${itemId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        const calculatedTotal = calculateTotal(data);
        setTotal(calculatedTotal);
      })
      .catch((error) => {
        console.error("Erreur de la suppression de l'item du pannier :", error);
      });
  };


  return (
    <section className="panier pt-12 pb-10">
      <h2 className="mb-10 text-center text-5xl font-bold">Panier</h2>
      <div className="mx-auto max-w-5xl text-center justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {Items.length === 0 ? (
          <>
            <p className="text-center text-gray-700">Votre panier est vide.</p>
            <Link to="/market_place" className="font-semibold hover:underline hover:text-cyan-800">Retour à la boutique</Link>
          </>
        ) : (
          <>
            <div className="rounded-lg md:w-2/3">
              {Items.map((item) => (
                <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img
                    src={item.item.imageUrl}
                    alt="Image d'un produit en vente par Inforomu"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{item.item.name}</h2>
                      <p className="mt-2 text-xs text-gray-700">{item.item.description}</p>
                    </div>
                    <div className="mt-4 lg:ms-5 md:ms-1 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5"> Qté : 1 </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm text-center">{item.item.price}€</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-700"
                          onClick={() => removeItemFromCart(item.id)} // Appel de removeItemFromCart avec l'ID de l'article
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Sous-Total</p>
                <p className="text-gray-700">{total.toFixed(2)} €</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Livraison</p>
                <p className="text-gray-700">5.00 €</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">{(total + 5).toFixed(2)} €</p>
                  <p className="text-sm text-gray-700">TVA Incluse</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={handleCheckout}>Acheter</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
