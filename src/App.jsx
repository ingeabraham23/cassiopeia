import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Escalas from "./Escalas";
import Gifs from "./Gifs";
import Guia from "./Guia";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gifs />} />
          <Route path="/escalas" element={<Escalas />} />
          <Route path="/guia" element={<Guia />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;