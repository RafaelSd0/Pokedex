"use client"
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/app/Components/Header/index"
import PokemonCard from "@/app/Components/PokemonCard/index"



export default function Home() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Header pokemonFilter={pokemonFilter} />
      <Container maxWidth="false" >
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
