'use client'; 

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Header from '@/app/Components/Header';
import styles from '@/app/Pokemon/[name]/page.module.css'
import { TypeHandler } from '@/app/Components/Type';
import Image from 'next/image';

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

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <h1 className={styles.title}>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase()}</h1>
        {pokemonData && (
          <div className={styles.content}>
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              height={300}
              width={300}
            />
            <TypeHandler types={pokemonData.types}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailsPage;