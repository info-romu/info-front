import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import config from "../../config";
import Cookies from "js-cookie";
import { useAtom } from 'jotai';
import { userAtom } from "../atom";
import Logout from '../components/Logout'


export default function Profile () {

  const [user] = useAtom(userAtom);
  const Navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("informations");

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/user/id`)
        .then((response) => response.json())
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des propriétés :", error);
        });
}, []);

const changeTab = (tabName) => {
  setActiveTab(tabName);
};

 // Fonction pour afficher le contenu de l'onglet actif
 const renderTabContent = () => {
  if (activeTab === "informations") {
    return (
      <div>
        <p>Mon nom : {Cookies.get('username')}</p>
        <p>Mon e-mail : {Cookies.get('email')}</p>
        <p>Mon adresse : </p>
        {/* <link>modifier mes informations</link> */}
      </div>
    );
  } else if (activeTab === "commandes") {
    // Affiche le contenu des commandes
  } else if (activeTab === "devis") {
    // Affiche le contenu des devis
  }
  // Ajoutez d'autres conditions pour les autres onglets

  return null;
};

  return (
    <div className="dashboard">
        <header className="dashboard_header">
          <h2>Mon compte</h2>
        </header>
        <div className="dashboard_content">
          <aside className="sidebar">
            <h6> Bienvenue {Cookies.get('username')}</h6>
              <ul>
                <li><a href="/informations" onClick={() => changeTab("informations")} 
                className={`${activeTab === "informations" ? "active-link" : ""}`}>
                mes informations</a></li>
                <li><a href="#" onClick={() => changeTab("commandes")}
                className={`${activeTab === "commandes" ? "active-link" : ""}`}>
                mes commandes
                </a></li>
                <li><a href="#" onClick={() => changeTab("devis")}
                className={`${activeTab === "devis" ? "active-link" : ""}`}>
                mes demandes de devis
                </a></li>
                <li><Link to="/contact" className={`text-sm font-semibold leading-6 text-gray-900 ${location.pathname === '/contact' ? 'active-link' : ''}`}>
                  Besoin d'aide ?
                </Link></li>
                <li><Logout  className={"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"}/></li>
              </ul>
          </aside>
          <div className="dashbord_content">
            <h2>Contenu de la page</h2>

<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="mr-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>Mes informations
            </a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                <svg class="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>mes commandes
            </a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>Mes devis
            </a>
        </li>
    </ul>
</div>
{renderTabContent()}

          </div>
        </div>
      </div>
    );
  }


