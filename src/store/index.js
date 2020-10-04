import Vue from 'vue'
import Vuex from 'vuex'
import { getAllPokemons, getPokemon } from '@/services/pokemon.api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokemon: {},
    listPokemons: [],
    stateList: 'normal',
    lengthList: 0
  },
  mutations: {
    SET_POKEMONS(state, pokemons) {
      state.pokemons = pokemons
    },
    SET_LIST_POKEMONS(state, pokemons) {
      state.listPokemons = pokemons
    },
    SET_POKEMON(state, pokemon) {
      state.pokemon = pokemon
    },
    SET_POKEMONS_FAV(state, id) {
      state.pokemons[id].fav = !state.pokemons[id].fav
    },
    SET_POKEMON_FAV(state) {
      state.pokemon.fav = !state.pokemon.fav
    },
    SET_STATE_LIST(state, stateList) {
      state.stateList = stateList
    },
    UPDATE_LENGHT_LIST(state) {
      state.lengthList += 20
    },
    CLEAN_POKEMON(state) {
      state.pokemon = {}
    }
  },
  getters: {
    limitPokemons: state => {
      if (state.stateList === 'fav') {
        return state.listPokemons.filter(pokemon => pokemon.fav)
      } else {
        return state.listPokemons
      }
    },
    allPokemons: state => {
      if (state.stateList === 'fav') {
        return state.pokemons.filter(pokemon => pokemon.fav)
      } else {
        return state.pokemons
      }
    },
    getLenght: state => state.lengthList,
    getPokemon: state => state.pokemon,
    getPokemonId: state => name => {
      return state.pokemons.find(pokemon => pokemon.name === name)
    }
  },
  actions: {
    getPokemons({ commit, state }) {
      if (!state.pokemons.length) {
        return getAllPokemons()
          .then(resp => {
            const pokemons = resp.results.map((pokemon, id) => {
              return {
                ...pokemon,
                id,
                fav: false
              }
            })

            const listPokemons = pokemons.slice(0, state.lengthList)

            commit('SET_POKEMONS', pokemons)
            commit('SET_LIST_POKEMONS', listPokemons)
          })
          .catch(error => {
            console.log('Ha ocurrido un error', error)
          })
      }
    },
    getPokemon({ commit, getters }, name) {
      commit('CLEAN_POKEMON')
      return getPokemon(name)
        .then(resp => {
          const {
            name,
            weight,
            height,
            types: pTypes,
            sprites: {
              other: {
                dream_world: { front_default: src }
              }
            }
          } = resp
          const types = pTypes.map(data => data.type.name)
          const { fav, id } = getters.getPokemonId(name)
          const pokemon = { name, weight, height, types, src, fav, id }

          commit('SET_POKEMON', pokemon)
        })
        .catch(error => {
          console.log('Ha ocurrido un error', error)
        })
    },
    updateLenghtList({ commit, state }) {
      const length = state.lengthList > state.pokemons.length

      if (!length) {
        commit('UPDATE_LENGHT_LIST')

        const listPokemons = state.pokemons.slice(0, state.lengthList)

        commit('SET_LIST_POKEMONS', listPokemons)
      }
    },
    setState({ commit }, stateList) {
      commit('SET_STATE_LIST', stateList)
    },
    setFav({ commit }, id) {
      commit('SET_POKEMONS_FAV', id)
      commit('SET_POKEMON_FAV')
    }
  },
  modules: {}
})
