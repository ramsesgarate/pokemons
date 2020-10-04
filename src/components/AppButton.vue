<template>
  <div>
    <router-link
      type="button"
      :to="to"
      class="button focus:outline-none"
      :class="[
        this.disabled ? 'bg-gray' : 'bg-red',
        this.disabled ? 'hover:bg-gray-dark-1' : 'hover:bg-red-dark-1',
        this.classes
      ]"
      v-on="$listeners"
      v-if="to"
    >
      <span class="v-btn__content text-white flex justify-center">
        <app-icon :name="icon" v-if="icon" class="mr-4" />
        <slot></slot>
      </span>
    </router-link>
    <button
      type="button"
      class="button focus:outline-none"
      :class="[
        this.disabled ? 'bg-gray' : 'bg-red',
        this.disabled ? 'hover:bg-gray-dark-1' : 'hover:bg-red-dark-1',
        this.classes
      ]"
      v-on="$listeners"
      v-else
    >
      <span class="v-btn__content text-white flex justify-center">
        <app-icon :name="icon" v-if="icon" class="mr-4" />
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
import AppIcon from './AppIcon'

export default {
  props: {
    icon: String,
    to: {
      type: [String, Object]
    },
    width: {
      default: null,
      type: String
    },
    classes: {
      default: null,
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppIcon
  }
}
</script>

<style>
.button {
  @apply py-3 px-5 rounded-full transition duration-200 mx-2;
}
</style>
