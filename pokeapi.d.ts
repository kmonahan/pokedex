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

interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedResource;
  pokedex_numbers: {
    entry_number: number;
    pokedex: NamedResource;
  };
  egg_groups: NamedResource;
  color: NamedResource;
  shape: NamedResource;
  evolves_from_species: NamedResource;
  evolution_chain: NamedResource;
  habitats: NamedResource;
  generation: NamedResource;
  names: {
    name: string;
    language: NamedResource;
  }[];
  pal_park_encounters: {
    base_score: number;
    rate: number;
    area: NamedResource;
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: NamedResource;
    version: NamedResource;
  }[];
  form_descriptions: {
    description: string;
    language: NamedResource;
  }[];
  genera: {
    genus: string;
    language: NamedResource;
  }[];
  varieties: {
    is_default: boolean;
    pokemon: NamedResource;
  }[];
}

interface EvolutionDetails {
  item?: NamedResource;
  trigger?: NamedResource;
  gender?: number;
  held_item?: NamedResource;
  known_move?: NamedResource;
  known_move_type?: NamedResource;
  location?: NamedResource;
  min_level?: number;
  min_happiness?: number;
  min_beauty?: number;
  min_affection?: number;
  needs_overworld_rain?: boolean;
  party_species?: NamedResource;
  party_type?: NamedResource;
  relative_physical_stats?: number;
  time_of_day?: string;
  trade_species?: NamedResource;
  turn_upside_down?: boolean;
}

interface ChainLink {
  is_baby: boolean;
  species: NamedResource;
  evolution_details: EvolutionDetails[];
  evolves_to?: ChainLink[];
}

interface EvolutionChain {
  id: number;
  baby_trigger_item?: NamedResource;
  chain?: ChainLink;
}

interface PokemonDetail extends Pokemon, PokemonSpecies {
  evolution: EvolutionChain;
}
