import Vue from 'vue';

import App from './App.vue';
// 引入mint
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 第三方库放在一起
import './assets/mui/css/mui.min.css';
import './assets/mui/css/icons-extra.css'
// 自己放一起
import './scss/app.scss'

// 自己写的到处放在一起
import router from './router.js/index.js'

var vm = new Vue({
    el: '#app',
    // 加载根组件
    render: c => c(App),
    router

})