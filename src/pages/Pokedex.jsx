import axios from "axios";
import { useEffect, useState } from "react";

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
      <h1>Pokédex</h1>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </>
  );
}
