export default {
  absolute: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'default',
    validator: value => {
      var label = ['small', 'default', 'big']

      return label.indexOf(value) > -1
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fab: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: null
  },
  isLoading: {
    type: Boolean,
    default: false
  }
}
