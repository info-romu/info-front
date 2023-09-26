// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Register from "./pages/Register"
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import CheckoutForm from './components/CheckoutForm';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Realisation from './pages/Realisation';
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Informations from "./pages/Informations";
import Estimate from "./pages/Estimate";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from './atom';
import Cookies from 'js-cookie';
import Services from './components/Services';
import PopUp from './components/PopUp';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Success from './pages/Success';
import Contact from './pages/Contact';
import DashboardAdmin from './pages/DashboardAdmin';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function App() {
  const [, setUser] = useAtom(userAtom);
  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      setUser({
        isLogged: true,
      });
    }
  }, []);

    const hasAdminRole = () => {
      const role = Cookies.get('admin');
      return role === 'true';
    };
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>,
    <BrowserRouter>
        <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/market_place" element={<MarketPlace />} />
          
          <Route path="/profile/:id" element={<Profile />}>
            <Route path="informations" element ={<Informations />} />
            <Route path="commandes" element ={<Order/>} />
            <Route path="devis" element ={<Estimate />} />
          </Route>

          <Route path="/services" element={<Services />} />
            
          <Route path="/realisations" element={<Realisation />} />

          {hasAdminRole() ? (
            <Route path="/dashboard" element={<DashboardAdmin />} />
          ) : (
            <Route
              path="/dashboard"
              element={<Navigate to="/" />}
            />
          )}       
          <Route path="/popup" element={<PopUp />} />
          <Route path="/success" element={<Success/>} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path='/cart'
            element={
              <Elements stripe={stripePromise}>
                <Cart />
              </Elements>
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;