import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../public/css/style.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </CartProvider>
)
