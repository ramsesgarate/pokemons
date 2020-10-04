<template>
  <div id="app">
    <div class="text-gray-dark-1 font-body">
      <router-view />
    </div>
    <app-bottom-bar v-if="$route.name !== 'welcome'" />
  </div>
</template>

<script>
import AppBottomBar from '@/components/AppBottomBar'

export default {
  components: {
    AppBottomBar
  }
}
</script>
