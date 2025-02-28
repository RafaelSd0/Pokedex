'use client'; 

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Header from '@/app/Components/Header';
import styles from '@/app/Pokemon/[name]/page.module.css'
import { TypeHandler } from '@/app/Components/Type';

const PokemonDetailsPage = () => {
  const params = useParams();
  const pokemonName = params.name; 

  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData.id}.gif`;

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <h1>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase()}</h1>
        {pokemonData && (
          <div className={styles.content}>
            <img
              src={gif}
              alt={pokemonData.name}
              height={250}
            />
          </div>
        )}
        <TypeHandler types={pokemonData.types}/>
      </div>
    </div>
  );
};

export default PokemonDetailsPage;