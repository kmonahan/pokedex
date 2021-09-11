import Head from "next/head";
import { GetStaticProps } from "next";
import Card from "../source/components/Card";
import { grid } from "../source/components/Grid/grid.css";
import { constrain } from "../source/components/Layout/layouts.css";
import { h1 } from "../source/base/headings.css";
import { useState, ChangeEvent } from "react";
import { theme } from "../source/base/theme.css";
import { mainCss } from "../source/components/Layout/main.css";

interface HomePageProps {
  pokemon: Pokemon[];
}

export default function Home({ pokemon }: HomePageProps) {
  const [themeClass, setThemeClass] = useState("moon");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setThemeClass(event.currentTarget.value);
  return (
    <div className={`${themeClass} ${theme} ${mainCss}`}>
      <Head>
        <title>Pokemon Sun/Moon Pokedex</title>
      </Head>

      <main className={constrain}>
        <h1 className={h1}>Pokémon Sun/Moon Pokédex</h1>
        <fieldset>
          <legend>
            <span>Select Theme</span>
          </legend>
          <input
            type="radio"
            name="theme"
            value="moon"
            id="theme-moon"
            onChange={handleChange}
            checked={themeClass === "moon"}
          />
          <label htmlFor="theme-moon">Moon</label>
          <input
            type="radio"
            name="theme"
            value="sun"
            id="theme-sun"
            onChange={handleChange}
            checked={themeClass === "sun"}
          />
          <label htmlFor="theme-sun">Sun</label>
        </fieldset>

        <ol className={grid}>
          {pokemon.map((pokemon) => (
            <Card key={pokemon.name} {...pokemon} />
          ))}
        </ol>
      </main>

      <footer>Via the PokéAPI.</footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async function () {
  let pokemonArray: Pokemon[] = [];
  const versionGroup = await fetch(
    `https://pokeapi.co/api/v2/version-group/sun-moon`
  );
  if (versionGroup.ok) {
    const versionGroupInfo: VersionGroup = await versionGroup.json();
    const pokedexes = versionGroupInfo.pokedexes;
    const allPokedexes = await Promise.all(
      pokedexes.map((pokedex) => fetch(pokedex.url))
    );
    const allPokedexInfo: Pokedex[] = await Promise.all(
      allPokedexes.map((response) => response.json())
    );
    const allPokemonSpecies: NamedResource[] = ([] as NamedResource[]).concat(
      ...allPokedexInfo.map((pokedex) =>
        pokedex.pokemon_entries.map(
          (entry): NamedResource => entry.pokemon_species
        )
      )
    );
    const allPokemonDeduped = [
      ...new Set(
        allPokemonSpecies.map((species) =>
          species.url.replace("pokemon-species", "pokemon")
        )
      ),
    ];

    // Fetch the Pokemon in batches of 50 and hope we don't time out.
    for (let counter = 0; counter <= allPokemonDeduped.length; counter += 50) {
      const pokemonToFetch = allPokemonDeduped.slice(counter, counter + 49);
      const pokemonData = await Promise.all(
        pokemonToFetch.map((url) => fetch(url))
      );
      const pokemonInfo = await Promise.all(
        pokemonData.map((response) => response.json())
      );
      pokemonArray = pokemonArray.concat(pokemonInfo);
    }

    return {
      props: {
        pokemon: pokemonArray,
      },
    };
  }
  return {
    props: {
      pokemon: pokemonArray,
    },
  };
};
