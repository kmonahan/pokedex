interface NamedResource {
  name: string;
  url: string;
}

interface VersionGroup {
  id: number;
  name: string;
  generation: NamedResource;
  move_learn_methods: NamedResource[];
  pokedexes: NamedResource[];
  regions: NamedResource[];
  versions: NamedResource[];
}

interface Pokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: {
    description: string;
    language: NamedResource;
  }[];
  names: {
    name: string;
    language: NamedResource;
  }[];
  pokemon_entries: {
    entry_number: number;
    pokemon_species: NamedResource;
  }[];
  region: NamedResource;
  version_groups: NamedResource[];
}

interface PokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: NamedResource[];
}

interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: NamedResource;
  }[];
  forms: NamedResource[];
  game_indices: {
    game_index: number;
    version: NamedResource;
  }[];
  held_items: {
    item: NamedResource;
    version_details: {
      rarity: number;
      version: NamedResource;
    }[];
  }[];
  location_area_encounters: string;
  moves: {
    move: NamedResource;
    version_group_details: {
      level_learned_at: number;
      version_group: NamedResource;
      move_learned_method: NamedResource;
    }[];
  }[];
  species: NamedResource;
  sprites: {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: NamedResource;
  }[];
  types: {
    slot: number;
    type: NamedResource;
  }[];
}
