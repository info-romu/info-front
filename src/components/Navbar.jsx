import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Logout from './Logout';

export default function Navbar() {
  const [user] = useAtom(userAtom);

  return (
    <nav className='nav'>
      <div className='nav-container'>
        <a href="#" className='nav-brand'>INFOROMU</a>
        <ul className='nav-list'>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          {user.isLogged ? (
            <> 
              <li>
                <Logout />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Connexion/S'inscrire</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
