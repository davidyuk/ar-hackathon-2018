import Vue from 'vue';
import Vuex from 'vuex';
import preview1 from './assets/bananaMan.gif';
import usdz1 from './assets/bananaMan.usdz';
import preview2 from './assets/carrotMen.gif';
import usdz2 from './assets/carrotMen.usdz';
import preview3 from './assets/gears.gif';
import usdz3 from './assets/gears.usdz';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vacancies: [
      {
        id: '0',
        name: 'Инженер по организации эксплуатации и ремонту зданий и сооружений',
        preview: preview1,
        usdz: usdz2,
      },
      {
        id: '2',
        name: 'Продавец-консультант в салон сотовой связи',
        preview: preview2,
        usdz: usdz1,
      },
      {
        id: '4',
        name: 'Стажер-разработчик мобильных приложений под IOS и Android',
        preview: preview3,
        usdz: usdz3,
      },
    ],
  },
});
