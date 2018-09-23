<template>
  <hr
    :class="classes"
    :style="styles"
  >
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
@import './style.scss';
</style>

<script>
import props from './prop-types'

export default {
  props,
  computed: {
    classes() {
      return {
        'ef-divider': true,
        'ef-divider--inset': this.inset,
        'ef-divider--vertical': this.vertical,
        'ef-divider--light': this.light,
        'ef-divider--dark': this.dark
      }
    },
    styles() {
      return {
        'border-color': this.light ? 'rgba(0, 0, 0, .15)' : this.dark ? 'rgba(255, 255, 255, .3)' : null
      }
    }
  }
}
</script>
