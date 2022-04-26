import React, { useContext, useEffect } from "react";
import PokemonCardPokedex from "../../Components/pokemonCardPokedex";
import UrlsPokedexContext from "../../Contexts/UrlsPokedexContext";
import styled from 'styled-components';
import Header from "../../Components/header";

const NoPokemon = styled.h1 ` 
  color: black;
  text-transform: uppercase;
`



export const MainContainer = styled.div`
  padding:0;
  height: 92vh;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PokedexPage = () => {
  const { states, setters, requests } = useContext(UrlsPokedexContext);
 

  useEffect(() => {
    requests.getPokemons();
  }, [requests]);

  const removePokemon = (remove) => {
    const index = states.pokedex.findIndex((i) => i.name === remove.name);
    let newPokedex = [...states.pokedex];
    if (newPokedex[index].amount === 1) {
        newPokedex.splice(index, 1);
    } else {
      newPokedex[index].amount -= 1;
    }
    setters.setPokedex(newPokedex);
    alert("Pokemon removido");
  };


  const pokemonsList = states.pokedex.map((item) => {
        return (
        <PokemonCardPokedex
          key={item.url}
          url={item.url}
          name={item.name}
          rmvPokemon={() => removePokemon(item)}
        />
      );
    });

  return (
    <>
    <Header/>
    <MainContainer>
    {pokemonsList.length > 0 ? pokemonsList : <NoPokemon> Pokedex Vazia! :( </NoPokemon>}</MainContainer>;

    </>
  )

};


export default PokedexPage;