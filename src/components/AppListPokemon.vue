<template>
  <div
    class="px-3 py-2 bg-white hover:bg-gray-light-4 rounded max-w-xl mx-auto text-lg flex font-medium text-gray-dark-2 justify-between items-center mb-3 cursor-pointer list"
    @click="goToPokemon"
  >
    <div><slot></slot></div>
    <app-button-start :fav="pokemon.fav" @click="saveFav" />
  </div>
</template>

<script>
import AppButtonStart from '@/components/AppButtonStart'

export default {
  props: {
    fav: Boolean,
    pokemon: Object
  },
  components: {
    AppButtonStart
  },
  methods: {
    goToPokemon(e) {
      if (e.target.nodeName === 'DIV') {
        this.$router.push({
          name: 'pokemon',
          params: { id: this.pokemon.name }
        })
      }
    },
    saveFav() {
      this.$store.dispatch('setFav', this.pokemon.id)
    }
  }
}
</script>

<style></style>
