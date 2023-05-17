import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './screens/Home';
import { DownloadCatalogue } from './screens/DownloadCatalogue';
import { Products } from './screens/Products';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/download-catalogue" element={<DownloadCatalogue />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
