import { api } from './api'

const getAllPokemons = () =>
  api('pokemon?limit=2000').then(
    data => {
      return data
    },
    error => {
      console.error(
        'Oh no, an unexpected error occurred fetching the pokemon list',
        error
      )
    }
  )

const getPokemon = pokemon =>
  api(`pokemon/${pokemon}`).then(
    data => {
      return data
    },
    error => {
      console.error(`Oh no, an error occurred bringing ${pokemon}`, error)
    }
  )

export { getAllPokemons, getPokemon }
