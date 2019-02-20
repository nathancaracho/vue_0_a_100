import Vue from "vue";

Vue.directive("ns-validate", {
  bind(el) {
    el.append("<span> somente teste<span>");
  }
});
