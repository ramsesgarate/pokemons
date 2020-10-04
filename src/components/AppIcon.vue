<template>
  <svg :width="width" :height="height" :fill="color" v-on="$listeners">
    <use v-bind="{ 'xlink:href': '/icons.svg#' + name }" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    color: {
      type: String,
      default: 'white'
    },
    width: {
      type: [Number, String],
      default: 22
    },
    height: {
      type: [Number, String],
      default: 22
    }
  }
}
</script>
