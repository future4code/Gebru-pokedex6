export const goToHomePage = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedex = (navigate) => {
    navigate("/pokedex");
  };

  export const goToPokemonDetailPage = (navigate, pokemonName) => {
    navigate(`/pokemon-detalhes/${pokemonName}`);
  };