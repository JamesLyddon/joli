import "./App.css";

import Home from "./Pages/Home";
import Headshots from "./Pages/Headshots";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/headshots" element={<Headshots />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
