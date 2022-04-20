import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pokedex } from "../pages/pokedex";
import { Datails } from "../pages/PokemonDatails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route Path="/pokedex" element={<Pokedex />} />
        <Route Path="/Datails" element={<Datails />} />
        <Route Path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
