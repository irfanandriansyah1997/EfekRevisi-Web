import Vue from 'vue'

export default function mixins(...args) {
  return Vue.extends({ mixins: args })
}
