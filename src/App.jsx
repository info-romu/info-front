import React, { useEffect } from 'react';
import Register from "./pages/Register"
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from './atom';
import Cookies from 'js-cookie';

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
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;