<template>
  <div class="flex flex-col mb-8 max-w-xl mx-auto">
    <div class="relative ">
      <div class="absolute flex h-full w-10 z-10">
        <div class="flex items-center justify-center w-full">
          <app-icon name="search" />
        </div>
      </div>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Search"
        class="relative w-full rounded placeholder-gray-400 focus:outline-none py-2 pr-2 pl-12"
        :value="value"
        @input="updateValue"
        autocomplete="off"
      />
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon'

export default {
  inheritAttrs: false,
  props: {
    value: String
  },
  components: {
    AppIcon
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
