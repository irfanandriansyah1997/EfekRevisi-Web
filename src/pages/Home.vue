<template>
  <div
    class="full-width center-content"
    style="padding: 20px;"
  >
    <ui-badges
      v-model="show"
      position="left"
      color="purple-light"
    >
      <span>Hai Huehehe</span>
      <ui-icon
        slot="badge"
        type="material-icons"
      >
        edit
      </ui-icon>
    </ui-badges>
    <ui-badges
      color="secondary"
    >
      <span>Hai Huehehe</span>
      <span slot="badge">5</span>
    </ui-badges>
    <div style="width: 400px">
      <ui-image
        height="200px"
        width="200px"
        gradient
        contain
        rounded
        src="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg"
        placeholder="https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20"
      />

      <ui-image
        height="300px"
        width="600px"
        gradient
        rounded
        src="https://images.unsplash.com/photo-1526868452228-6590028c2fac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1becfc7e858de96fadc0dd171b6905a&auto=format&fit=crop&w=1050&q=80"
        placeholder="https://images.unsplash.com/photo-1526868452228-6590028c2fac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1becfc7e858de96fadc0dd171b6905a&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
