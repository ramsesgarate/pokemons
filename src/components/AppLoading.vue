<template>
  <div
    class="h-screen flex items-center justify-center absolute inset-0 z-50 bg-gray-light-3 transition-all duration-200"
    v-if="value"
  >
    <img src="@/assets/img/loader.svg" alt="" class="animate-pulse" />
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  }
}
</script>
