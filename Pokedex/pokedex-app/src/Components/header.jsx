import React from 'react';
import { goToHomePage, goToPokedex } from '../Router/coordinator';
import { useNavigate } from 'react-router-dom';
import  styled  from "styled-components";

const Hed = styled.header`
background-color: #3a163b;
h1 { 
  
    padding: 30px;
    display: flex;
    justify-content: space-between;
    color: #0b0303;
    font-family: "Helvetica Neue", sans-serif;}
button {
    background-color: black;
    opacity: 0.6;
    border: none;
    width: 15vw;
    height: 8vh;
    color: #fff;
    margin-left: 1rem;
    border-radius: 5vh;
  }
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