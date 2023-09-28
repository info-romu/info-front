import React, { useEffect, useState } from "react";
import config from "../../config";
import Cookies from "js-cookie";


export default function DashboardAdmin() {

    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    useEffect(() => {
        fetch(`${config.API_BASE_URL}/items`)
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des propriétés :", error);
            });
    }, []);

    const removeItem = (itemId) => {
        const token = Cookies.get('token');
        fetch(`${config.API_BASE_URL}/items/${itemId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
            })

            .catch((error) => {
                console.error("Erreur de la suppression de l'item du pannier :", error);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const itemData = { name, description, price, imageUrl }
        const token = Cookies.get('token');

        try {
            const response = await fetch(`${config.API_BASE_URL}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(itemData),
            });

            if (response.ok) {
                const data = await response.json();
                setItems(data.items);
            } else {
                console.error('Échec de la création de l item');
            };
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
            setError('Erreur de connexion au serveur. Veuillez vérifier votre connexion Internet.');
        };
    };

    return (
        <>
            <h2>DashboardAdmin</h2>
            <section className="flex flex-col items-center mt-8 p-1 xl:flex-row xl:items-start xl:justify-center">
                <div className="w-full md:w-2/4 xl:w-1/4 my-8">
                    <h3>Ajouter un produit</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom du produit</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nom"
                                onChange={handleNameChange}
                                minLength={3}
                                maxLength={40}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Mettez votre description"
                                onChange={handleDescriptionChange}
                                minLength={3}
                                maxLength={200}
                                required>
                            </textarea>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix du produit</label>
                            <input
                                type="number"
                                id="price"
                                placeholder="Prix en €"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handlePriceChange}
                                min={1}
                                max={1000}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url de l'image du produit</label>
                            <input
                                type="text"
                                id="imageUrl"
                                placeholder="Url image"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleImageUrlChange}
                                minLength={3}
                                maxLength={200}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 w-1/2 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
                        >
                            Ajouter
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-4/5 xl:w-3/5 text-center">
                    <h3>Les Produits En Ventes</h3>
                    <div className="flex flex-col items-center justify-center md:w-full">
                        {items.map((item) => (
                            <div key={item.id} className="w-full md:w-4/5 my-5 h-87 md:h-52 max-h-screen flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img
                                    className="object-cover  md:w-1/4 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
                                    src={item.imageUrl}
                                    alt="image produit en vente"
                                />
                                <div className="flex flex-col w-full md:w-3/4 justify-between items-center p-4 leading-normal dashboardAdmin_card_text">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                                    <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">{item.price} €</p>
                                    <button onClick={() => removeItem(item.id)} className="bg-red-500 w-1/2 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Supprimer</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}
