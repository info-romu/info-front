import React from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '../atom'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

export default function Logout(props) {
  const [, setUserState] = useAtom(userAtom)

  const handleLogout = () => {
    setUserState({ isLogged: false });
    Cookies.remove('token');
    Cookies.remove('id');
    Cookies.remove('username');
    Cookies.remove('email');
    Cookies.remove('admin');
    console.log('vous etes déconnecter');
  };


  return (
    <Link
      onClick={handleLogout}
      to="/"
      className={props.className}
    >
      Déconnexion
    </Link>
  )
}
