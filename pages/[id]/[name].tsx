import {
  fetchPokedexes,
  fetchPokemon,
  fetchPokemonSpecies,
} from "../../source/data";
import { GetStaticPropsContext } from "next";
import { cardImg } from "../../source/components/Card/card.css";
import Head from "next/head";
import { constrain } from "../../source/components/Layout/layouts.css";
import { h1, h2 } from "../../source/base/headings.css";
import {
  detailLayout,
  detailLayoutHeader,
  detailLayoutSection,
} from "../../source/components/Layout/detail.css";
import Evolution from "../../source/components/Evolution";
import capitalize from "../../source/utility/capitalize";
import { Tag } from "../../source/components/Tag/tag.css";
import Stat from "../../source/components/Stat";

interface PokemonPageProps {
  pokemon: PokemonDetail;
}

function PokemonPage({ pokemon }: PokemonPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{capitalize(pokemon.name)} | Pokemon Sun/Moon Pokedex</title>
      </Head>
      <main className={`${constrain} ${detailLayout}`}>
        <header className={detailLayoutHeader}>
          <h1 className={`${h1}`}>{capitalize(pokemon.name)}</h1>
          <img
            className={cardImg}
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} front view`}
          />
          {pokemon.types.map((type) => (
            <span className={Tag}>{type.type.name}</span>
          ))}
          {pokemon.is_baby && <span className={Tag}>Baby</span>}
          {pokemon.is_legendary && <span className={Tag}>Legendary</span>}
          {pokemon.is_mythical && <span className={Tag}>Mythical</span>}
        </header>
        {pokemon.evolution && pokemon.evolution.chain && (
          <Evolution
            chain={pokemon.evolution.chain}
            currentPokemon={pokemon.species.name}
          />
        )}
        <div className={detailLayoutSection}>
          <h2 className={h2}>Moves</h2>
          <ul>
            {pokemon.moves
              .filter(
                (move) => move.version_group_details[0].level_learned_at > 0
              )
              .sort((moveA, moveB) => {
                if (
                  moveA.version_group_details[0].level_learned_at >
                  moveB.version_group_details[0].level_learned_at
                ) {
                  return 1;
                }
                if (
                  moveA.version_group_details[0].level_learned_at <
                  moveB.version_group_details[0].level_learned_at
                ) {
                  return -1;
                }
                return 0;
              })
              .map((move) => (
                <li key={move.move.name}>
                  {move.move.name.replace("-", " ")}:{" "}
                  {move.version_group_details[0].level_learned_at}
                </li>
              ))}
          </ul>
        </div>
        <div className={detailLayoutSection}>
          <h2 className={h2}>Stats</h2>
          {pokemon.stats.map((stat) => (
            <Stat
              key={stat.stat.name}
              name={stat.stat.name}
              value={stat.base_stat}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default PokemonPage;
export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (params) {
    const pokeApiRes = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.name}`),
    ]);
    const pokemonData = await Promise.all(pokeApiRes.map((res) => res.json()));
    const [pokemonBasicData, pokemonSpeciesData] = pokemonData as [
      Pokemon,
      PokemonSpecies
    ];
    let evolutionData = {};
    if (pokemonSpeciesData.evolution_chain.url) {
      const evolutionRes = await fetch(pokemonSpeciesData.evolution_chain.url);
      evolutionData = await evolutionRes.json();
    }
    return {
      props: {
        pokemon: {
          ...pokemonBasicData,
          ...pokemonSpeciesData,
          evolution: {
            ...evolutionData,
          },
        },
      },
    };
  }
}
export async function getStaticPaths() {
  const pokedexes = await fetchPokedexes();
  const pokemonSpecies = await fetchPokemonSpecies(pokedexes);
  const pokemon = await fetchPokemon(pokemonSpecies);

  const paths = pokemon.map((pokemon) => ({
    params: { id: pokemon.id.toString(), name: pokemon.species.name },
  }));
  return { paths, fallback: false };
}
