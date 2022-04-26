import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage/homePage"
import PokemonDetailPage from "../pages/PokemonDetailPage/pokemonDetailPage"
import PokedexPage from "../pages/PokedexPage/pokedexPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/pokemon-detalhes/:pokemonName" element={<PokemonDetailPage/>} />              
                <Route exact path="/pokedex" element={<PokedexPage/>} />
                <Route exact path="*" element={<><h1>ERRO DE PAGINA!!</h1> </>}  />             
            </Routes>
        </BrowserRouter>
    )
}

export default Router