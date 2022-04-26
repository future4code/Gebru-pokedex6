import React, { useContext, useEffect} from "react";
import styled from 'styled-components';
import PokemonCard from "../../components/pokemonCard";
import UrlsPokedexContext from "../../Contexts/UrlsPokedexContext";
import Header from "../../components/header"

export const MainContainer = styled.div`
  padding:0;
  height: 92vh;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 5px;
  row-gap: 10px;
`

const HomePage = () => {
  const { states, setters, requests } = useContext(UrlsPokedexContext);


  useEffect(() => {
    requests.getPokemons();
  }, [requests]);

  /* função para adicionar na pokedex */
  const addPokemonToPokedex = (newItem) => {
    const index = states.pokedex.findIndex((i) => i.name === newItem.name);
    let newPokedex = [...states.pokedex];
    if (index === -1) {
      newPokedex.push({ ...states.newPokedex, name: newItem.name, url: newItem.url});
      alert(`${newItem.name} Pokemon adicionado a Pokedex!`);
      } else {
      newPokedex[index].ammount += 1;
    }
    setters.setPokedex(newPokedex);
  };

  const pokemonsList =
    states.pokemons &&
    states.pokemons.map((item) => {
      return (
        <PokemonCard
          key={item.url}
          url={item.url}
          name={item.name}
          addPokemon={() => addPokemonToPokedex(item)}
        />
      );
    });

  return (
    <>
      <Header/>
  <MainContainer>{pokemonsList}</MainContainer>
    </>

  )
};

export default HomePage;