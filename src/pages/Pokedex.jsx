import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];

    for (let i = 1; i <= 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => {
        setPokemons(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "1rem" }}>
        {pokemons.map((pokemon, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={index}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
