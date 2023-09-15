import React, { useEffect } from 'react';
import Register from "./pages/Register"
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Login from "./pages/Login";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from './atom';
import Cookies from 'js-cookie';
import Services from './components/Services';
import PopUp from './components/PopUp';

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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;