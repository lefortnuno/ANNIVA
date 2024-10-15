import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Loka from "./pages/hbd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Loka />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
