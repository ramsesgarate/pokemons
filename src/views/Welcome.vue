<template>
  <div class="flex items-center flex-col p-16 z-60">
    <div class="mx-auto mb-16 relative mt-8">
      <img
        src="@/assets/img/pikachu.svg"
        alt=""
        class="absolute h-p-288 w-p-355 max-w-none -top-70 -right-70"
      />
      <div
        class="bg-red rounded-full h-p-206 w-p-206 border-solid border-black border-2"
      ></div>
    </div>
    <h1 class="font-bold text-2xl mb-8 text-gray-dark-2">Welcome to Pokédex</h1>
    <p class="text-base font-medium mb-12 text-center">
      The digital encyclopedia created by Professor Oak is an invaluable tool
      <br class="hidden sm:block" />
      to Trainers in the Pokémon world.
    </p>
    <app-button :to="{ name: 'pokemons' }">
      Get started
    </app-button>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'Welcome',
  components: {
    AppButton
  }
}
</script>
