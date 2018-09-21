import Vue from 'vue';
import Router from 'vue-router';
import VacancyList from './views/VacancyList.vue';
import VacancyDetail from './views/VacancyDetail.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'vacancy-list',
    component: VacancyList,
  }, {
    path: '/vacancy/:id',
    name: 'vacancy-detail',
    component: VacancyDetail,
    props: true,
  }],
});
