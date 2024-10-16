import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Cake from "./pages/cake/cake";
import Carte from "./pages/carte/carte";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Cake />} />
          <Route path="carte/" element={<Carte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
