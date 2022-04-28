import React from 'react';
import { goToHomePage, goToPokedex } from '../Router/coordinator';
import { useNavigate } from 'react-router-dom';
import  styled  from "styled-components";

const Hed = styled.header`
background-color: #3a163b;
h1 { 


    padding: 30px;
    display: grid;
    background-image:url(https://www.pngkit.com/png/full/21-211496_eevee-the-pokmon-eeveelution-twitter-header.png);
    text-align:center;
    border-style:ridge;
    width:96%;
    font-weight:50px;
    height:120px;

    color: #5e2d2d;

     font-family: "Helvetica Neue", sans-serif;}
button {
    background-color: black;
    opacity: 0.6;
    border: 55vh;
    width: 12vw;
    height: 10vh;
    color: #fff;
    margin-left: 25rem;
    border-radius: 85vh;
    margin-bottom:20px

  }
`



const Header = () => {
    const navigate = useNavigate();
   
  
  
  
    return (
        <Hed>

         <h1> pokemon</h1>
            <button onClick={() => goToHomePage(navigate)}>Lista de Pokemons</button>
           
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>

            

        </Hed>
    )
};

export default Header;