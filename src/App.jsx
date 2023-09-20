import React, { useEffect } from 'react';
import Register from "./pages/Register"
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from './pages/Success';

const stripePromise = loadStripe(
  "pk_test_51N8qrpHWNoe0qekSPWRTxOgeegPPWK0iiMouWvYSv2apDMHssbZ2Urto4WLAovhtDWwLauJoU7xmFClaFdVPfqnT00B07uE0BP"
);

function App() {
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      setUser({
        isLogged: true,
      });
    }
  }, []);

  return (
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