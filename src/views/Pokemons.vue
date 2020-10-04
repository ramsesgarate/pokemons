<template>
  <div
    class="container mx-auto pt-8 lg:pt-12 pb-24 lg:max-w-screen-lg px-4"
    ref="listPokemon"
  >
    <app-loading v-model="loading" />
    <app-input-search v-model="search" />
    <div v-if="exitsPokemons">
      <app-list-pokemon
        v-for="(pokemon, index) of filteredPokemons"
        :key="index"
        :pokemon="pokemon"
      >
        {{ pokemon.name | capitalize }}
      </app-list-pokemon>
    </div>
    <div v-else class="text-center">
      <h2 class="font-bold text-2xl mb-2 text-gray-dark-2">Uh-oh!</h2>
      <p class="mb-6">You look lost on your journey!</p>
      <app-button @click="cleanSearch">Go back home</app-button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import filters from '@/mixins/filters'
import AppLoading from '@/components/AppLoading'
import AppInputSearch from '@/components/AppInputSearch'
import AppListPokemon from '@/components/AppListPokemon'
import AppButton from '@/components/AppButton'

export default {
  name: 'Pokemons',
  mixins: [filters],
  components: {
    AppLoading,
    AppInputSearch,
    AppListPokemon,
    AppButton
  },
  data() {
    return {
      loading: false,
      search: ''
    }
  },
  computed: {
    ...mapGetters(['limitPokemons', 'allPokemons', 'getLenght']),
    filteredPokemons() {
      if (this.search) {
        return this.allPokemons
          .filter(pokemon =>
            pokemon.name.toLowerCase().includes(this.search.toLowerCase())
          )
          .slice(0, this.getLenght)
      } else {
        return this.limitPokemons
      }
    },
    exitsPokemons() {
      return Boolean(this.filteredPokemons.length)
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('getPokemons').then(() => {
      this.loading = false
    })
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    cleanSearch() {
      this.$store.dispatch('setState', 'normal')
      this.search = ''
    },
    onScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >
        document.documentElement.offsetHeight - 1

      if (bottomOfWindow) {
        this.$store.dispatch('updateLenghtList')
      }
    }
  }
}
</script>
