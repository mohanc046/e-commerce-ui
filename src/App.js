import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
