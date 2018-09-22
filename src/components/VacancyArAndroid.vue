<template>
  <div class="vacancy-ar-android">
    <img :src="vacancy.preview" />
    <button @click="showOverlay = true">AR</button>
    <div v-if="showOverlay" class="overlay">
      <button @click="showOverlay = false">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vacancy: Object,
  },
  data: () => ({
    showOverlay: false,
  }),
};
</script>

<style lang="scss" scoped>
.vacancy-ar-android {
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  button {
    position: absolute;
    right: 5px;
    bottom: 5px;
  }

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }
}
</style>
