const badges = () =>
  import(/* webpackChunkName: "badges" */ './badges/badges.component.vue')

const button = () =>
  import(/* webpackChunkName: "button" */ './button/button.component.vue')

const checkbox = () =>
  import(/* webpackChunkName: "checkbox" */ './checkbox/checkbox.component.vue')

const divider = () =>
  import(/* webpackChunkName: "divider" */ './divider/divider.component.vue')

const icon = () =>
  import(/* webpackChunkName: "icon" */ './icon/icon.component.vue')

const image = () =>
  import(/* webpackChunkName: "image" */ './image/image.component.vue')

const loading = () =>
  import(/* webpackChunkName: "loading" */ './loading/loading.component.vue')

const radioButton = () =>
  import(/* webpackChunkName: "radio-button" */ './radio-button/radio-button.component.vue')

const textfield = () =>
  import(/* webpackChunkName: "textfield" */ './textfield/textfield.component.vue')

const tooltip = () =>
  import(/* webpackChunkName: "tooltip" */ './tooltip/tooltip.component.vue')

export default [
  {
    component: badges,
    name: 'ui-badges'
  },
  {
    component: button,
    name: 'ui-button'
  },
  {
    component: checkbox,
    name: 'ui-checkbox'
  },
  {
    component: divider,
    name: 'ui-divider'
  },
  {
    component: icon,
    name: 'ui-icon'
  },
  {
    component: image,
    name: 'ui-image'
  },
  {
    component: loading,
    name: 'ui-loading'
  },
  {
    component: radioButton,
    name: 'ui-radio-button'
  },
  {
    component: textfield,
    name: 'ui-textfield'
  },
  {
    component: tooltip,
    name: 'ui-tooltip'
  }
]
