import Head from "next/head";
import { GetStaticProps } from "next";
import Card from "../source/components/Card";
import { grid } from "../source/components/Grid/grid.css";
import { constrain } from "../source/components/Layout/layouts.css";
import { h1 } from "../source/base/headings.css";
import { useState, ChangeEvent } from "react";
import { theme } from "../source/base/theme.css";
import { mainCss } from "../source/components/Layout/main.css";
import {
  fetchPokedexes,
  fetchPokemon,
  fetchPokemonSpecies,
} from "../source/data";

interface HomePageProps {
  pokemon: Pokemon[];
}

export default function Home({ pokemon }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Pokemon Sun/Moon Pokedex</title>
      </Head>

      <main className={constrain}>
        <h1 className={h1}>Pokémon Sun/Moon Pokédex</h1>
        <ol className={grid}>
          {pokemon.map((pokemon) => (
            <Card key={pokemon.name} {...pokemon} />
          ))}
        </ol>
      </main>

      <footer>Via the PokéAPI.</footer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async function () {
  const pokedexes = await fetchPokedexes();
  const pokemonSpecies = await fetchPokemonSpecies(pokedexes);
  const pokemon = await fetchPokemon(pokemonSpecies);

  return {
    props: {
      pokemon,
    },
  };
};
