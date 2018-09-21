<template>
  <img
    class="vacancy-ar"
    :src="vacancy.preview"
  />
</template>

<script>
export default {
  props: {
    vacancy: Object,
  },
};
</script>
