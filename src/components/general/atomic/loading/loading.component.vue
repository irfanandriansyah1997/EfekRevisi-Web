<template>
  <svg
    :class="classes"
    x="0px"
    y="0px"
    viewBox="0 0 150 150"
  >
    <circle
      class="ef-loading-circle__inner"
      cx="75"
      cy="75"
      r="60"
    />
  </svg>
</template>

<style lang="scss">
@import './style.scss';
</style>

<script>
import props from './prop-types'

export default {
  props,
  computed: {
    classes() {
      return {
        'ef-loading-circle': true,
        'ef-loading-circle--google-type': this.type === 'google'
      }
    }
  }
}
</script>
