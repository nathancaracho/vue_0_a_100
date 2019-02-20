import Vue from "vue";

Vue.filter("date", date => {
  date = new Date(date);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
});
