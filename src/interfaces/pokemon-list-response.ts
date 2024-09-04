export interface PokemonListResponse {
  count: number
  next: null
  previous: null
  results: Pokemon[]
}

export interface Pokemon {
  url: string
  name: string
}
