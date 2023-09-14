import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import ItemCart from "../components/ItemCart";

const Cart = () => {
    const [Items, setItems] = useState([]);

    useEffect(() => {
        const token = Cookies.get('token');   
           
        fetch("http://127.0.0.1:3000/cart_items", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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
    <div className="pt-10 pb-10">
      <h1 className="mb-10 text-center text-2xl font-bold">Votre Pannier</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
        {Items.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))}
          
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
