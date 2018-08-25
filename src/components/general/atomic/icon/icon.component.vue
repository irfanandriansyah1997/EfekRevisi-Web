<template>
  <i
    :class="classes"
    :style="styles"
  >
    <slot v-if="type === 'material-icons'" />
  </i>
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
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
      const className = {
        'ef-icon': true,
        'ef-icon--x-small': this.size === 'small',
        'ef-icon--small': this.size === 'small',
        'ef-icon--large': this.size === 'large',
        'ef-icon--x-large': this.size === 'x-large'
      }

      if (this.type === 'material-icons') {
        className['material-icons'] = true
      } else {
        className[this.$slots.default] = true
      }

      return className
    },
    styles() {
      const data = (...args) => {
        return {
          'font-size': `${args[0]}px`,
          'color': args[1]
        }
      }

      return this.checkKey(data(this.fontSize, this.color))
    }
  },
  methods: {
    checkKey(data) {
      return Object.keys(data).filter(x => {
        return data[x]
      }).map(x => {
        return { [x]: data[x] }
      }).reduce((obj, item) => {
        return { ...obj, ...item }
      }, {})
    }
  }
}
</script>
