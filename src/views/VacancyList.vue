<template>
  <div class="vacancy-list">
    <div><span /></div>
    <div><span /></div>

    <router-link
      v-for="vacancy in vacancies"
      :to="{ name: 'vacancy-detail', params: { id: vacancy.id } }"
      :key="vacancy.id"
    >
      <div class="name">{{ vacancy.name }}</div>
      <div class="salary">{{ vacancy.salary }} руб.</div>
    </router-link>

    <div><span /></div>
    <div><span /></div>
    <div><span /></div>
    <div><span /></div>
    <div><span /></div>
    <div><span /></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['vacancies']),
};
</script>

<style lang="scss" scoped>
.vacancy-list {
  a, div {
    text-decoration: none;
    color: #000;
    padding: 5px 0;
    line-height: 1.5;
  }

  a {
    display: flex;

    .name {
      flex-grow: 1;
      color: rgb(0, 153, 255);
    }

    .salary {
      flex-shrink: 0;
      color: #000;
    }
  }

  div span:after {
    word-wrap: break-word;
    content: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww';
    background-color: #ddd;
    color: #ddd;
  }
}
</style>
