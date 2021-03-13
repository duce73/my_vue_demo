//主函数入口

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
    components : {
        App,
    },
    el : "#app",
    template : "<App/>"
})