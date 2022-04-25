import React from 'react';
import { goToHomePage, goToPokedex } from '../Router/coordinator';
import { useNavigate } from 'react-router-dom';
import  styled  from "styled-components";

const Hed = styled.header`
background-color: #3b2e16;
h1 { 
    color: pink}
`




const Header = () => {
    const navigate = useNavigate();
   
  
  
  
    return (
        <Hed>
            <button onClick={() => goToHomePage(navigate)}>Lista de Pokemons</button>
            <h1>Pokemon</h1>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        
        </Hed>
    )
};

export default Header;