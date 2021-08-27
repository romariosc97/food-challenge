import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fontawesome from './plugins/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

let main = createApp(App);
main
.use(router)
.use(store)
.component('FontAwesomeIcon', FontAwesomeIcon)
.use(fontawesome)
.mount('#app');