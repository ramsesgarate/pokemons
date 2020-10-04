<template>
  <div
    class="py-4 bg-white fixed w-screen z-10 bottom-0 flex justify-center shadow-bottom-bar"
  >
    <app-button
      icon="list"
      classes="w-p-150 sm:w-p-275"
      @click="setList('normal')"
      :disabled="stateList === 'fav'"
    >
      All
    </app-button>
    <app-button
      icon="start"
      classes="w-p-150 sm:w-p-275"
      :disabled="stateList === 'normal'"
      @click="setList('fav')"
    >
      Favorites
    </app-button>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

import { mapState } from 'vuex'

export default {
  components: {
    AppButton
  },
  computed: {
    ...mapState(['stateList'])
  },
  methods: {
    setList(type) {
      this.$store.dispatch('setState', type)
    }
  }
}
</script>

<style></style>
