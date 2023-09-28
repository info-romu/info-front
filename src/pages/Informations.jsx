import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from 'react-router-dom'
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function Informations () {
 
  return (
  <section className="client">
  <div className="client_informations">
  <p>Mon nom : {Cookies.get('username')}</p>
  <p>Mon e-mail : {Cookies.get('email')}</p>
  </div>
  <div className="client_address">
  <p>Mon adresse : blablabla </p>
  </div>
  <div className="client_modifications">
  <Link to="#">Modifier mes informations</Link>
  <Link to="#">Modifier mon mot de passe</Link>
  </div>
</section>
)}