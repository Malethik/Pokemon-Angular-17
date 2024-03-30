export interface Species {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: Color[];
  evolution_chain: Evolutionchain;
  evolves_from_species?: any;
  flavor_text_entries: Flavortextentry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: Color;
  growth_rate: Color;
  habitat: Color;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: Palparkencounter[];
  pokedex_numbers: Pokedexnumber[];
  shape: Color;
  varieties: Variety[];
}
export interface Variety {
  is_default: boolean;
  pokemon: Color;
}
export interface Pokedexnumber {
  entry_number: number;
  pokedex: Color;
}
export interface Palparkencounter {
  area: Color;
  base_score: number;
  rate: number;
}
export interface Name {
  language: Color;
  name: string;
}
export interface Genus {
  genus: string;
  language: Color;
}
export interface Flavortextentry {
  flavor_text: string;
  language: Color;
  version: Color;
}
export interface Evolutionchain {
  url: string;
}
export interface Color {
  name: string;
  url: string;
}
