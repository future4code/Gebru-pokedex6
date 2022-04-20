import React from "react";
import { goToPokedex } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";

export const Datails = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Datails</p>
      <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
    </>
  );
};
