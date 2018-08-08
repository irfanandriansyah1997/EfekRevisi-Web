<template>
  <div>
    <h3>Hello {{ name }} from my Vue.js BosQusase!</h3>
    <a>jiajisa</a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
