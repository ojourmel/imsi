// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import router from './router';
import imsi from './imsi';

Vue.use(VueMaterial.MdCore);
Vue.use(VueMaterial.MdBackdrop);
Vue.use(VueMaterial.MdButton);
Vue.use(VueMaterial.MdIcon);
Vue.use(VueMaterial.MdList);
Vue.use(VueMaterial.MdSidenav);
Vue.use(VueMaterial.MdToolbar);



/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  template: '<imsi></imsi>',
  components: { imsi }
});
