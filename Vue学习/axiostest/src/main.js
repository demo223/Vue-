import Vue from "vue";
import App from "./App";

import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

// axios默认为get请求
axios
  .get("https://api.coindesk.com/v1/bpi/currentprice.json")
  // .then(function(response) {
  //   console.log(response);
  // })
  .then(response => {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });
