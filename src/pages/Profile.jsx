import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import config from "../../config";
import Cookies from "js-cookie";
import Logout from "../components/Logout";
import Informations from "./Informations";
import Order from "./Order";
import Estimate from "./Estimate";

export default function Profile() {
  const userId = Cookies.get("id");
  const [profile, setprofile] = useState([]);
  const Navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("informations");

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/profile/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setprofile(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des propriétés :", error);
      });
  }, []);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
    Navigate(`/profile/${userId}/${tabName}`);
  };

  const renderTabContent = () => {
    if (activeTab === "informations") {
      return <Informations />;
    } else if (activeTab === "commandes") {
      return <Order />;
    } else if (activeTab === "devis") {
      return <Estimate />;
    }

    return null;
  };

  return (
    <section className="dashboard">
      <div className="dashboard_header">
        <h2>Mon compte</h2>
      </div>
      <div className="dashboard_content">
        <aside className="sidebar">
          <ul>
            <li>
              <Link
                to={`/profile/${userId}/informations`}
                onClick={() => changeTab("informations")}
                className={`${
                  activeTab === "informations" ? "active-link" : ""
                }`}
              >
                mes informations
              </Link>
            </li>
            <li>
              <Link
                to={`/profile/${userId}/commandes`}
                onClick={() => changeTab("commandes")}
                className={`${activeTab === "commandes" ? "active-link" : ""}`}
              >
                mes commandes
              </Link>
            </li>
            <li>
              <Link
                to={`/profile/${userId}/devis`}
                onClick={() => changeTab("devis")}
                className={`${activeTab === "devis" ? "active-link" : ""}`}
              >
                mes demandes de devis
              </Link>
            </li>
            <div className="sidebar_bottom">
            <li>
              <Link
                to="/contact"
                className={`text-sm font-semibold leading-6 text-gray-900 ${
                  location.pathname === "/contact" ? "active-link" : ""
                }`}
              >
                Besoin d'aide ?
              </Link>
            </li>
            <li>
              <Logout
                className={"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 disconnect disconnect_icon"}
              />
            </li>
            </div>
          </ul>
        </aside>
        <div className="dashbord_content">
          <h2>Bienvenue {Cookies.get("username")}</h2>
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="tabs mr-2">
                <Link
                  to={`/profile/${userId}/informations`}
                  onClick={() => changeTab("informations")}
                  className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300
        ${activeTab === "informations" ? "active-link" : ""}`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  Mes informations
                </Link>
              </li>
              <li className="tabs mr-2">
                <Link
                  to={`/profile/${userId}/commandes`}
                  onClick={() => changeTab("commandes")}
                  className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 
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
                  className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300
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
