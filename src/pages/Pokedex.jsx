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
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((response) => setPokemons(response.data.results))
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
