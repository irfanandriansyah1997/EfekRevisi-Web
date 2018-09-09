<template>
  <div :class="classes">
    <div class="ef-badges__content">
      <slot />
    </div>
    <transition
      :css="false"
      name="slide-up-fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="value"
        class="ef-badges__badges">
        <slot name="badge" />
      </div>
    </transition>
  </div>
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
        'ef-badges': true,
        'ef-badges--left': this.position === 'left',
        'ef-badges--right': this.position === 'right',
        [`ef-badges--color-${this.color}`]: this.color != null
      }
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0

      return el
    },
    enter /* istanbul ignore next */(el, done) {
      Velocity(el, { opacity: 0.75 }, { duration: 300 })
      Velocity(el, { opacity: 1 }, { complete: done })
    },
    leave /* istanbul ignore next */(el, done) {
      Velocity(
        el,
        {
          translateY: '10px',
          opacity: 0
        },
        { complete: done }
      )
    }
  }
}
</script>
