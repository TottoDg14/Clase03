import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Store from "./pages/(store)/Store"
import Product from "./pages/(store)/Product"
import { useEffect } from "react"

import 'animate.css';
import WOW from 'wow.js';

function App() {
  useEffect(() => {
    const wow = new WOW({
      live: true // detecta elementos dinámicos
    });
    wow.init();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/store/product" element={<Product/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
