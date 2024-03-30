export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResults {
  count: number;
  next: string;
  previous?: string;
  results: Pokemon[];
}
export interface Pokedex {
  pokemon: Pokemon[];
}

export interface Pokemon {
  id: number;
  num: string;
  name: string;
  img: string;
  types: Types[];
  stats: Stat[];
  height: string;
  weight: string;
  candy: string;
  candy_count?: number;
  egg: Egg;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time: string;
  multipliers: number[] | null;
  weaknesses: Type[];
  next_evolution?: Evolution[];
  prev_evolution?: Evolution[];
}
export interface Stat {
  base_stat: number;
  effort: number;
}
export enum Egg {
  NotInEggs = 'Not in Eggs',
  OmanyteCandy = 'Omanyte Candy',
  The10KM = '10 km',
  The2KM = '2 km',
  The5KM = '5 km',
}

export interface Evolution {
  num: string;
  name: string;
}

export enum Type {
  Bug = 'Bug',
  Dark = 'Dark',
  Dragon = 'Dragon',
  Electric = 'Electric',
  Fairy = 'Fairy',
  Fighting = 'Fighting',
  Fire = 'Fire',
  Flying = 'Flying',
  Ghost = 'Ghost',
  Grass = 'Grass',
  Ground = 'Ground',
  Ice = 'Ice',
  Normal = 'Normal',
  Poison = 'Poison',
  Psychic = 'Psychic',
  Rock = 'Rock',
  Steel = 'Steel',
  Water = 'Water',
}
export interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}
export interface Ability {
  name: string;
  url: string;
}
export interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}
export interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}
export interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}
export interface Types {
  slot: number;
  type: Ability;
}
