import React from 'react';
import { goToDatails, goToHomePage } from '../Routes/Coordinator';
import {useNavigate} from 'react-router-dom';


export const Pokedex = () => {
  const navigate = useNavigate()
  return (
    <>
       <p>Pokedex</p>
       <button onClick={() => goToDatails (navigate)}>Datails</button>
       <button onClick={() => goToHomePage (navigate)}>Datails</button>

    </>
 
  )

  
};
