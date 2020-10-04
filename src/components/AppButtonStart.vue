<template>
  <span
    class="relative rounded-full bg-gray-light-3 h-p-44 w-p-44 cursor-pointer"
    v-on="$listeners"
  >
    <app-icon
      name="start"
      class="absolute top-50-26/2 right-11"
      :color="fav ? '#ECA539' : '#BFBFBF'"
    />
  </span>
</template>

<script>
import AppIcon from '@/components/AppIcon'

export default {
  props: {
    fav: Boolean
  },
  components: {
    AppIcon
  }
}
</script>
