import { z } from "zod"

export const PersonSchema = z.object( {
  name: z.string(),
  height: z.string(),
  mass: z.string(),
  hair_color: z.string(),
  skin_color: z.string(),
  eye_color: z.string(),
  birth_year: z.string(),
  gender: z.string(),
  homeworld: z.string(),
  films: z.string().array(), 
  species: z.string().array(), 
  vehicles: z.string().array(), 
  starships: z.string().array(), 
  created: z.string(),
  edited: z.string(),
  url: z.string()
})

export const StarshipSchema = z.object( {
  name: z.string(), 
  model: z.string(), 
  manufacturer: z.string(), 
  cost_in_credits: z.string(), 
  length: z.string(), 
  max_atmosphering_speed: z.string(), 
  crew: z.string(), 
  passengers: z.string(), 
  cargo_capacity: z.string(), 
  consumables: z.string(), 
  hyperdrive_rating: z.string(), 
  MGLT: z.string(), 
  starship_class: z.string(), 
  pilots: z.string().array(), 
  films: z.string().array(), 
  created: z.string(), 
  edited: z.string(), 
  url: z.string(), 
})

export const FilmSchema = z.object({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  characters: z.string().array(),
  planets: z.string().array(), 
  starships: z.string().array(),
  vehicles: z.string().array(),
  species: z.string().array(),
  created: z.string(),
  edited: z.string(),
  url: z.string(),
})

export const PlanetSchema = z.object( {
  name: z.string(),
  rotation_period: z.string(),
  orbital_period: z.string(),
  diameter: z.string(),
  climate: z.string(),
  gravity: z.string(),
  terrain: z.string(),
  surface_water: z.string(),
  population: z.string(),
  residents: z.string().array(), 
  films: z.string().array(), 
  created: z.string(),
  edited: z.string(),
  url: z.string(),
})

export const SpecieSchema = z.object ({
  name: z.string(),
  classification: z.string(),
  designation: z.string(),
  average_height: z.string(),
  skin_colors: z.string(),
  hair_colors: z.string(),
  eye_colors: z.string(),
  average_lifespan: z.string(),
  homeworld: z.string(),
  language: z.string(),
  people: z.string().array(), 
  films: z. string().array(), 
  created: z.string(),
  edited: z.string(),
  url: z.string(),
})

export const VehicleSchema = z.object( {
  name: z.string(),
  model: z.string(),
  manufacturer: z.string(),
  cost_in_credits: z.string(),
  length: z.string(),
  max_atmosphering_speed: z.string(),
  crew: z.string(),
  passengers: z.string(),
  cargo_capacity: z.string(),
  consumables: z.string(),
  vehicle_class: z.string(),
  pilots: z.string().array(), 
  films: z.string().array(), 
  created: z.string(),
  edited: z.string(),
  url: z.string(),
})

export const SwapiEntitySchema = z.union([
    VehicleSchema,
    PersonSchema,
    StarshipSchema,
    FilmSchema,
    PlanetSchema,
    SpecieSchema
  ])

export const SwapiListSchema = z.object({
  count: z.number(), 
  next: z.string().optional(), 
  previous: z.string().optional(), 
  results: SwapiEntitySchema.array()
})