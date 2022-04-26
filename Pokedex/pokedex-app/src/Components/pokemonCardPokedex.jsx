import React, {  useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//       margin: '0px 10px 50px 0px',
//     },
//   });

const PokemonCardPokedex = (props) => {
    // const classes = useStyles();
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
     }, );


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
  height="140"
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
<Button size="small" onClick={props.rmvPokemon}>
            Remover da pokedex
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


export default PokemonCardPokedex