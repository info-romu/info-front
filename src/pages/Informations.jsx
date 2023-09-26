import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from 'react-router-dom'
import Cookies from "js-cookie";

export default function Informations () {
 
  return (
  <div>
  <p>Mon nom : {Cookies.get('username')}</p>
  <p>Mon e-mail : {Cookies.get('email')}</p>
  <p>Mon adresse : blablabla </p>
  <a>Modifier mes informations</a>
  <br></br>
  <a>Modifier mon mot de passe</a>
</div>

)}