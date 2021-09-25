import {
  fetchPokedexes,
  fetchPokemon,
  fetchPokemonSpecies,
} from "../../source/data";
import { GetStaticPropsContext } from "next";
import { cardImg } from "../../source/components/Card/card.css";
import Link from "next/link";

interface PokemonPageProps {
  pokemon: PokemonDetail;
}

function PokemonPage({ pokemon }: PokemonPageProps): JSX.Element {
  return (
    <main>
      <h1>{pokemon.name}</h1>
      <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <div>
        <img
          className={cardImg}
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} front view`}
        />
      </div>
      {pokemon.evolution && pokemon.evolution.chain && (
        <div>
          {pokemon.evolution.chain.species.name !== pokemon.name && (
            <>
              <h3>Evolves From</h3>
              <p>{pokemon.evolution.chain.species.name}</p>
            </>
          )}
          {pokemon.evolution.chain.evolves_to && (
            <>
              {pokemon.evolution.chain.evolves_to.map((evolves_to) =>
                evolves_to.species.name === pokemon.name ? (
                  ""
                ) : (
                  <>
                    <h3 key={evolves_to.species.name}>Evolves To</h3>
                    <div>
                      {evolves_to.species.name}
                      <dl>
                        {evolves_to.evolution_details.map((details) => {
                          return Object.entries(details)
                            .filter(([key, value]) => value)
                            .map(([key, value]) => {
                              if (
                                typeof value === "object" &&
                                value !== null &&
                                value.name
                              ) {
                                return (
                                  <>
                                    <dt key={key}>{key}</dt>
                                    <dd>{value.name}</dd>
                                  </>
                                );
                              }
                              return (
                                <>
                                  <dt key={key}>{key}</dt>
                                  <dd>{value}</dd>
                                </>
                              );
                            });
                        })}
                      </dl>
                    </div>
                  </>
                )
              )}
            </>
          )}
        </div>
      )}
      {pokemon.is_baby && (
        <p>
          <strong>Baby</strong>
        </p>
      )}
      {pokemon.is_legendary && (
        <p>
          <strong>Legendary</strong>
        </p>
      )}
      {pokemon.is_mythical && (
        <p>
          <strong>Mythical</strong>
        </p>
      )}
      <h2>Moves</h2>
      <ul>
        {pokemon.moves
          .filter((move) => move.version_group_details[0].level_learned_at > 0)
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
      <h2>Stats</h2>
      {pokemon.stats.map((stat) => (
        <div key={stat.stat.name}>
          {stat.stat.name.replace("-", " ")}: {stat.base_stat}
        </div>
      ))}
    </main>
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
