import React, { useState, useEffect } from "react";
import Pokedex from "pokedex-promise-v2";
import Card from "./Card";

const pokedex = new Pokedex();

const PopularSection = () => {
  const [popularPokemons, setPopularPokemons] = useState([]);

  const fetchPopularPokemons = async () => {
    try {
      const res = await pokedex.getPokemonsList();
      const pokemonNames = res.results.map((pokemon) => pokemon.name);

      const selectedPokemonNames = [];
      while (selectedPokemonNames.length < 3) {
        const randomIndex = Math.floor(Math.random() * pokemonNames.length);
        const randomPokemonName = pokemonNames[randomIndex];
        if (!selectedPokemonNames.includes(randomPokemonName)) {
          selectedPokemonNames.push(randomPokemonName);
        }
      }

      const promises = selectedPokemonNames.map((name) =>
        pokedex.getPokemonByName(name)
      );
      const pokemons = await Promise.all(promises);
      setPopularPokemons(pokemons);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPopularPokemons();
    const interval = setInterval(() => {
      fetchPopularPokemons();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 pb-16 px-4">
      <div className="container">
        <h1 className="py-4 text-2xl text-white">Popular Pokemon</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[400px] md:w-[100%] mx-auto">
          {popularPokemons.map((p) => (
            <Card
              key={p.name}
              img={p.sprites.front_default}
              name={p.name}
              types={p.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
