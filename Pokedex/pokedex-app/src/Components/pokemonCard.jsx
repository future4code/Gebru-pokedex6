import React, {  useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const PokemonCard = (props) => {
    
    const [pokemon, setPokemon] = useState("");
  
    const getPokemon = () => {
      axios
        .get(props.url)
        .then((res) => {
          setPokemon(res.data.sprites.front_default);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getPokemon();
     
     }, []);


    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
        {!pokemon ?
          <CardMedia
          component="img"
          alt="Loading"
          height="200"
          src='https://cdn.dribbble.com/users/946764/screenshots/2844436/pokeball.gif'
        /> :
<CardMedia
  component="img"
  height="160"
  src={pokemon}
  alt="Pokemon..."
/>
 }
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {props.name}
  </Typography>
 
</CardContent>
<CardActions>
<Button size="small" onClick={props.addPokemon}>
          Adicionar à pokedex
        </Button>
        <Button
          size="small"
          align='center'
          href={`/pokemon-detalhes/${props.name}`}
        >
          Detalhes do Pokemon
        </Button>
</CardActions>
</Card>
        </>

    )
};

export default PokemonCard












// const navigate = useNavigate();





/* <Typography variant="body2" color="text.secondary">
Lizards are a widespread group of squamate reptiles, with over 6,000
species, ranging across all continents except Antarctica
</Typography> */
