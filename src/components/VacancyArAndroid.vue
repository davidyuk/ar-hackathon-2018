<template>
  <div class="vacancy-ar-android">
    <img :src="vacancy.preview" />
    (android detected)
  </div>
</template>

<script>
export default {
  props: {
    vacancy: Object,
  },
};
</script>
