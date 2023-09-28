import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
import Cookies from "js-cookie";
import Logout from "../components/Logout";
import Order from "./Order";
import Estimate from "./Estimate";
import { useAtom } from 'jotai'
import { userAtom } from '../atom'

export default function Profile() {
  const userId = Cookies.get("id");
  const [profile, setprofile] = useState([]);
  const Navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("commandes");
  const [, setUserState] = useAtom(userAtom)


  useEffect(() => {
    const token = Cookies.get('token');

    fetch(`${config.API_BASE_URL}/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setprofile(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de l'utilisateur :", error);
      });
  }, []);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
    Navigate(`/profile/${userId}/${tabName}`);
  };

  const renderTabContent = () => {
    if (activeTab === "commandes") {
      return <Order />;
    } else if (activeTab === "devis") {
      return <Estimate />;
    }

    return null;
  };

  const handleRemoveAccount = () => {
    const token = Cookies.get('token');

    fetch(`${config.API_BASE_URL}/users`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(() => {

        setUserState({ isLogged: false });
        Cookies.remove('token');
        Cookies.remove('id');
        Cookies.remove('username');
        Cookies.remove('email');
        Cookies.remove('admin');
        console.log('vous avez supprimer votre compte');
        Navigate('/')
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du compte :", error);
      });
  };

  return (
    <section className="dashboard">
      <h2 className="ms-2 font-bold">Mon compte</h2>
      <div className="dashboard_content mx-2 flex-col-reverse md:flex-row">
        <aside className="sidebar w-auto md:w-3/5 md:max-w-xs">
          <div className="sidebar_profile">
            <p className="sidebar_profile_letter font-semibold bg-green-500">{profile && profile.username && profile.username.charAt(0)}</p>
            <p className="sidebar_profile_username font-semibold">{profile.username}</p>
          </div>
          <div className="sidebar_details flex flex-col">
            <p className=" font-semibold text-lg">Details</p>
            <hr />
            <p className="mt-2"><span className="font-semibold">username :</span> {profile.username}</p>
            <p><span className=" font-semibold">Email :</span> {profile.email}</p>
            <Link className=" font-semibold hover:underline hover:underline-offset-2" to="#">Modifier mes informations</Link>
            <Link className=" font-semibold hover:underline hover:underline-offset-2" to="#">Modifier mon mot de passe</Link>
            <ul>
              <li>
                <Link
                  to="/contact"
                  className="font-semibold hover:underline hover:underline-offset-2"
                >
                  Besoin d'aide ?
                </Link>
              </li>
              <li>
                <Logout
                  className="font-semibold disconnect disconnect_icon"
                />
              </li>
            </ul>
            <button onClick={handleRemoveAccount} className="font-semibold bg-red-600 rounded w-5/6">Supprimer mon Compte</button>
          </div>
        </aside>
        <div className="dashboard_content_container">
          <div className="border-b my-5 border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="tabs mr-2">
                <Link
                  to={`/profile/${userId}/commandes`}
                  onClick={() => changeTab("commandes")}
                  className={`px-6 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 
        ${activeTab === "commandes" ? "active-link" : ""}`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  Mes commandes
                </Link>
              </li>
              <li className="tabs mr-2">
                <Link
                  to={`/profile/${userId}/devis`}
                  onClick={() => changeTab("devis")}
                  className={`px-6 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300
        ${activeTab === "devis" ? "active-link" : ""}`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                  Mes devis
                </Link>
              </li>
            </ul>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}
