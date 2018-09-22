<template>
  <a
    class="vacancy-ar-ios"
    :href="vacancy.usdz"
    rel="ar"
  >
    <img :src="vacancy.preview" />
  </a>
</template>

<script>
export default {
  props: {
    vacancy: Object,
  },
};
</script>

<style lang="scss" scoped>
.vacancy-ar-ios img {
  width: 100%;
}
</style>
