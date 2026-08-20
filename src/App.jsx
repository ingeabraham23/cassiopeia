// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Escalas from "./Escalas";
import Gifs from "./Gifs";
import Guia from "./Guia";
import Grafos from "./Grafos";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Gifs />} />
          <Route path="/escalas" element={<Escalas />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/grafos" element={<Grafos />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;