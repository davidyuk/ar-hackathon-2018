<template>
  <div class="vacancy-detail">
    <h1>{{ vacancy.name }}</h1>
    <component
      :is="arComponent"
      :vacancy="vacancy"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VacancyAr from '../components/VacancyAr.vue';
import VacancyArAndroid from '../components/VacancyArAndroid.vue';
import VacancyArIos from '../components/VacancyArIos.vue';

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapState({
      vacancy({ vacancies }) {
        return vacancies.find(v => v.id === this.id);
      },
    }),
    arComponent: () =>
      // https://stackoverflow.com/a/6031480
      (navigator.userAgent.toLowerCase().includes('android') && VacancyArAndroid) ||
      // https://stackoverflow.com/a/9039885
      (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && VacancyArIos) ||
      VacancyAr,
  },
};
</script>

<style lang="scss" scoped>
.vacancy-detail {
  h1 {
    font-weight: lighter;
    font-size: 25px;
  }
}
</style>
