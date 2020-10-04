<template>
  <div
    class="max-w-xl rounded overflow-hidden shadow-lg bg-white relative absolute top-20% mx-4 sm:mx-auto"
  >
    <app-icon
      name="close"
      class="absolute z-10 top-12 right-12 cursor-pointer"
      width="26"
      height="26"
      @click="closeCard"
    />
    <div class="relative">
      <div class="w-full h-p-220 background-card"></div>
      <img
        :src="pokemon.src"
        v-if="pokemon.src"
        class="absolute h-p-180 w-p-180 top-10% left-20% sm:left-36%"
      />
      <img
        src="@/assets/img/loader.svg"
        v-else
        class="absolute h-p-180 w-p-180 top-10% left-20% sm:left-36%"
      />
    </div>
    <div class="px-4 pt-3 ">
      <div class="py-2 attributtes">
        <span class="font-bold"> Name: </span> {{ pokemon.name | capitalize }}
      </div>
      <hr class="text-gray-light-2" />
      <div class="py-2 attributtes">
        <span class="font-bold"> Weight: </span> {{ pokemon.weight }}
      </div>
      <hr class="text-gray-light-2" />
      <div class="py-2 attributtes">
        <span class="font-bold"> Height: </span> {{ pokemon.height }}
      </div>
      <hr class="text-gray-light-2" />
      <div class="py-2 attributtes" v-if="pokemon.types">
        <span class="font-bold"> Types: </span>
        {{ pokemon.types | capitalize | join }}
      </div>
      <hr class="text-gray-light-2" />
    </div>
    <div class="flex justify-between p-4">
      <app-button @click="copyPokemon">Share to my friends</app-button>
      <app-button-start :fav="pokemon.fav" @click="saveFav" />
    </div>
  </div>
</template>

<script>
import filters from '@/mixins/filters'

import AppButton from '@/components/AppButton'
import AppIcon from '@/components/AppIcon'
import AppButtonStart from '@/components/AppButtonStart'

export default {
  props: {
    fav: Boolean,
    pokemon: {
      type: Object,
      required: true
    }
  },
  mixins: [filters],
  components: {
    AppButton,
    AppIcon,
    AppButtonStart
  },
  methods: {
    closeCard() {
      this.$router.push({ name: 'pokemons' })
    },
    copyPokemon() {
      let attributtes = Array.from(
        document.getElementsByClassName('attributtes')
      )
      let text = attributtes.map(data => data.innerText).join(', ')

      const copy = document.createElement('textarea')
      copy.value = text

      copy.setAttribute('readonly', '')
      copy.style.position = 'absolute'
      copy.style.left = '-9999px'
      document.body.appendChild(copy)
      copy.select()
      document.execCommand('copy')
      document.body.removeChild(copy)
    },
    saveFav() {
      this.$store.dispatch('setFav', this.pokemon.id)
    }
  }
}
</script>

<style>
.background-card {
  background-image: url('../assets/img/background-card.svg');
  background-repeat: no-repeat;
  background-position: center;
}
</style>
