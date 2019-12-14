// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "./components.js";
import "./plugins.js";
import App from "./App";
import router from "./router.js";
import { Icon } from "leaflet";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-shadow.png"
});

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
