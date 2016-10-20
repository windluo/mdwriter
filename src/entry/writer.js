
import '../css/markdown.css';
import vueresource from 'vue-resource';
import writer from '../temps/writer.vue';

Vue.use(vueresource);

new Vue({
  	el: '#app',

  	components: {
      	writer
  	}
});