<template>
  <div class="vacancy-detail">
    {{ vacancy.name }}<br />
    <a
      :href="vacancy.usdz"
      rel="ar"
    >
      <img :src="vacancy.preview" />
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    id: String,
  },
  computed: mapState({
    vacancy({ vacancies }) {
      return vacancies.find(v => v.id === this.id);
    },
  }),
};
</script>
