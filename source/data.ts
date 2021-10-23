const fetchPokedexes = async () => {
  const versionGroup = await fetch(
    `https://pokeapi.co/api/v2/version-group/sun-moon`
  );
  if (!versionGroup.ok) {
    throw new Error("Could not fetch versions.");
  }
  const versionGroupInfo: VersionGroup = await versionGroup.json();
  return versionGroupInfo.pokedexes;
};

const fetchPokemonSpecies = async (pokedexes: NamedResource[]) => {
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
  return allPokemonSpecies.map((species) => ({
    name: species.name,
    url: species.url.replace("pokemon-species", "pokemon"),
  }));
};

const fetchPokemon = async (pokemonSpecies: NamedResource[]) => {
  let pokemonArray: Pokemon[] = [];
  // Fetch the Pokemon in batches of 50 and hope we don't time out.
  for (let counter = 0; counter <= pokemonSpecies.length; counter += 50) {
    const pokemonToFetch = pokemonSpecies.slice(counter, counter + 49);
    const pokemonData = await Promise.all(
      pokemonToFetch.map((pokemon) => fetch(pokemon.url))
    );
    const pokemonInfo = await Promise.all(
      pokemonData.map((response) => response.json())
    );
    pokemonArray = pokemonArray.concat(pokemonInfo);
  }
  return Object.values(
    pokemonArray.reduce<Record<string, Pokemon>>(
      (uniquePokemon, currentPokemon) => {
        uniquePokemon[currentPokemon.id] = currentPokemon;
        return uniquePokemon;
      },
      {}
    )
  );
};

export { fetchPokedexes, fetchPokemonSpecies, fetchPokemon };
