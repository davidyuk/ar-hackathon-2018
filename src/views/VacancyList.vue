<template>
  <div class="vacancy-list">
    <router-link
      v-for="vacancy in vacancies"
      :to="{ name: 'vacancy-detail', params: { id: vacancy.id } }"
      :key="vacancy.id"
    >
      {{ vacancy.name }}<br />
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['vacancies']),
};
</script>
