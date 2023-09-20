// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Register from "./pages/Register"
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import CheckoutForm from './components/CheckoutForm';
import Cart from './pages/Cart';
import Login from "./pages/Login";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from './atom';
import Cookies from 'js-cookie';
import Services from './components/Services';
import PopUp from './components/PopUp';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N9WNvKEgZiwtZMaFKqMHEyc3ZbjMCqmfQCoc4Hlh4j8QIR2Po4TYJCwvc9nmCJxveEqztG8XohpTVnxkNH8g1yE00E2Jcdwyr');

function App() {
  const [, setUser] = useAtom(userAtom);
  const options = {
    // passing the client secret obtained from the server
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
          <Route path="/services" element={<Services />} />
          <Route path="/popup" element={<PopUp />} />
          <Route path="/success" element={<Success/>} />
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