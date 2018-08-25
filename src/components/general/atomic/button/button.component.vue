<template>
  <a :class="classes">
    <vnodes :vnodes="genContent()"/>
  </a>
</template>

<style lang="scss">
@import 'style.scss';
</style>

<script>
import props from './prop-types'

export default {
  components: {
    Vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  props,
  computed: {
    classes() {
      return {
        'ef-btn': true,
        'ef-btn--small': this.size === 'small',
        'ef-btn--large': this.size === 'large',
        'ef-btn--disabled': this.disabled,
        'ef-btn--fab': this.fab,
        'ef-btn--outline': this.outline,
        'ef-btn--loading': this.loading,
        'ef-btn--round': this.round
      }
    }
  },
  methods: {
    genContent() {
      return this.$createElement('div', { class: 'ef-btn__content' }, [
        this.$slots.default
      ])
    }
  }
}
</script>
