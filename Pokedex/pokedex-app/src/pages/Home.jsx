import React from 'react';
import { goToPokedex } from '../Routes/Coordinator';
import {useNavigate} from 'react-router-dom'


export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
       <p>Home</p>
       <button onClick={() => goToPokedex (navigate)}>Pokedex</button>
       

    </>
 
  )

  
};
