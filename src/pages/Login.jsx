import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';



const Login= () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [, setUserState] = useAtom(userAtom)

    const navigate = useNavigate();


    const handlePasswordHide = () => {
      let pswrd = document.getElementById('password');
      let toggleBtn = document.getElementById('toggleBtn');
      
      if(pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide')
      } else {
        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide')
      }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const userData = { user: { email, password } };
    
      try {
        const response = await fetch('http://127.0.0.1:3000/users/sign_in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
    
        if (response.ok) {
          const userDataResponse = await response.json();
          const userId = userDataResponse.user.id;
    
          const authorizationHeader = response.headers.get('authorization');
          if (authorizationHeader) {
            const token = authorizationHeader.split('Bearer ')[1];
            setUserState({ isLogged: true });
            navigate('/')
            Cookies.set('token', token);
            Cookies.set('id', userId);

            console.log('Connexion réussie !');
          }    
          setEmail('');
          setPassword('');
        } else {
          console.error('Échec de la connexion email ou mot de passe incorect');
          setError('Échec de la connexion email ou mot de passe incorect');
          setEmail('');
          setPassword('');
        }
      } catch (error) {
        console.error('Erreur lors de la requête:', error);
        setError('Erreur de connexion au serveur. Veuillez vérifier votre connexion Internet.');
      }
    };

    return (
      <section>
        <div className='box'>
        <h2>Connexion</h2>
        <form className='box_form' onSubmit={handleSubmit}>
        {error && (
            <div className="alert" role="alert">
              {error}
            </div>
          )}
          <label htmlFor="email">Email :</label>
            <div className='inputBox'>
                <input
                    className='inputBox_input'
                    type="email"
                    id="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <label htmlFor="password">Mot de passe :</label>
            <div className='inputBox'>
                <input
                    className='inputBox_input'
                    type="password"
                    id="password"
                    placeholder='Mot de passe'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <span id='toggleBtn' onClick={handlePasswordHide}></span>
            </div>
            <button type="submit" className='form-btn'>Se connecter</button>
            <p className='txt-noaccount'>Vous n'avez pas encore de compte ?</p>
            <Link to='/register' className='link-login'>Inscrivez-vous !</Link>
        </form>
    </div>
  </section>
    );
}

export default Login;