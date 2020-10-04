<template>
  <div class="fixed inset-0 z-30 bg-black bg-opacity-50 h-screen">
    <app-loading v-model="loading" />
    <app-card-pokemon :pokemon="getPokemon" v-if="getPokemon" />
  </div>
</template>

<script>
import AppCardPokemon from '@/components/AppCardPokemon'
import AppLoading from '@/components/AppLoading'

import { mapGetters } from 'vuex'

export default {
  name: 'Pokemon',
  components: {
    AppCardPokemon,
    AppLoading
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getPokemon'])
  },
  created() {
    this.loading = true
    this.$store.dispatch('getPokemon', this.$route.params.id).then(() => {
      this.loading = false
    })
  }
}
</script>
