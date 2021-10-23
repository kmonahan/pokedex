import Head from "next/head";
import { GetStaticProps } from "next";
import Card from "../source/components/Card";
import { grid } from "../source/components/Grid/grid.css";
import { constrain } from "../source/components/Layout/layouts.css";
import { h1 } from "../source/base/headings.css";
import {
  fetchPokedexes,
  fetchPokemon,
  fetchPokemonSpecies,
} from "../source/data";
import TypeFilter from "../source/components/TypeFilter";
import { useMemo, useState } from "react";
import { SiteFooter } from "../source/components/Layout/siteFooter.css";

interface HomePageProps {
  pokemon: Pokemon[];
}

export default function Home({ pokemon }: HomePageProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const types = useMemo(
    () => [
      ...new Set(
        pokemon
          .map((pokemon) => pokemon.types.map((type) => type.type.name).flat())
          .flat()
      ),
    ],
    [pokemon]
  );
  const displayedPokemon = useMemo(() => {
    if (selectedType === null) {
      return pokemon;
    }
    return pokemon.filter((pokemon) =>
      pokemon.types.some((type) => type.type.name === selectedType)
    );
  }, [pokemon, selectedType]);
  const handleTypeSelect = (type: string | null) => setSelectedType(type);
  return (
    <>
      <Head>
        <title>Pokemon Sun/Moon Pokedex</title>
      </Head>

      <main className={constrain}>
        <h1 className={h1}>Pokémon Sun/Moon Pokédex</h1>
        <TypeFilter types={types} handleTypeSelect={handleTypeSelect} />
        <ol className={grid}>
          {displayedPokemon.map((pokemon, index) => (
            <Card key={`${pokemon.id}-${pokemon.name}-${index}`} {...pokemon} />
          ))}
        </ol>
      </main>

      <footer className={SiteFooter}>
        <div className={constrain}>
          Via{" "}
          <a href="https://pokeapi.co/" target="_blank" rel="nofollow">
            the PokéAPI
          </a>
          . Icons via{" "}
          <a
            href="https://fonts.google.com/icons"
            target="_blank"
            rel="nofollow"
          >
            Google Fonts
          </a>
          .
        </div>
      </footer>
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
