import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './components/About';
import { Home } from './components/Home';
import { ShoppingCart } from './components/ShoppingCart';
import { CheckoutDetails } from './components/Checkout';
import { ShoppingDetails } from './components/ShoppingDetails';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutDetails />} />
            <Route path="/shop-details" element={<ShoppingDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
      <Footer />

    </div>
  );
}

export default App;
