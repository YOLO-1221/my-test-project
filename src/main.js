import Vue from 'vue'

/**
 * 引入 Element UI
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/**
 * 引入JSON预览插件
 */
import JsonViewer from 'vue-json-viewer'

import App from './App.vue'
import router from './router'

Vue.use(ElementUI);
Vue.use(JsonViewer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
