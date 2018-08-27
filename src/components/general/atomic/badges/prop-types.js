export default {
  color: {
    type: String,
    default: null
  },
  position: {
    type: String,
    default: 'right',
    validator: value => {
      var label = ['left', 'right']

      return label.indexOf(value) > -1
    }
  },
  value: {
    type: Boolean | Number | String,
    default: true
  }
}
