import 'prismjs'
import Vue from 'vue'
import Docs from './Docs.vue'
import Sidebar from './components/Sidebar.vue'
import Resource from 'vue-resource'
import vSelect from '../src/components/Select.vue'
import countries from './data/advanced'

Vue.use(Resource)
Vue.component('v-select', vSelect)
Vue.component('sidebar', Sidebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Docs },
  data () {
    return {
      options: countries,
      placeholder: 'Choose a country..',
    }
  }
})