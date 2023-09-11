import React from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '../atom'
import Cookies from 'js-cookie';

export default function logout() {
    const [, setUserState] = useAtom(userAtom)

    const handleLogout = () => {
        setUserState({ isLogged: false });
        Cookies.remove('token');
        Cookies.remove('id');
        console.log('vous etes déconnecter');
    };
  
  
    return (
    <button className='btn-logout' onClick={handleLogout}>Se Déconnecter</button>
  )
}
