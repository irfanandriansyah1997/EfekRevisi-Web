<template>
  <div :class="classes">
    <vnodes :vnodes="genContent()"/>
    <transition
      :css="false"
      name="slide-up-fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <vnodes
        v-if="value"
        :vnodes="genBadges()"
      />
    </transition>
  </div>
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
@import './style.scss';
</style>

<script>
/* global Velocity */
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
        'ef-badges': true,
        'ef-badges--left': this.position === 'left',
        'ef-badges--right': this.position === 'right',
        [`ef-badges--color-${this.color}`]: this.color != null
      }
    }
  },
  methods: {
    genContent() {
      return this.$createElement('div', { class: 'ef-badges__content' }, [
        this.$slots.default
      ])
    },
    genBadges() {
      return this.$createElement('div', { class: 'ef-badges__badges' }, [
        this.$slots.badge
      ])
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      Velocity(el, { opacity: 0.75 }, { duration: 300 })
      Velocity(el, { opacity: 1 }, { complete: done })
    },
    leave: function(el, done) {
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
