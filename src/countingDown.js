import Vue from "vue";
import App from "./countingDown.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App)
});
