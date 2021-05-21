<template>
  <div>
  </div>
</template>

<script>
import {getAuthUrl, loginByCustomer, loginByEmployee} from "api/wx_mp";
let config = require('../config');

export default {
  data() {
    return {
    }
  },
  mounted() {
    let params = new URLSearchParams(location.search);
    let redirect = params.get("redirect");
    let code = params.get("code");
    let that = this;

    let redirectInfo = redirect.split("?");
    if(redirectInfo.length != 2){
      alert("登录失败！参数有误！");
      return;
    }
    let redirectPath = redirectInfo[0];
    let redirectSearch = redirectInfo[1];

    let login;
    if(redirectPath.startsWith("/customer")){
      login = loginByCustomer;
    }else if(redirectPath.startsWith("/employee")) {
      login = loginByEmployee;
    }else {
      alert("登录失败！参数有误！");
      return;
    }

    let redirectParams = new URLSearchParams("?" + redirectSearch);
    let ak = redirectParams.get("ak");
    if(!ak){
      alert("登录失败！参数有误！");
      return;
    }

    if(code){
      login({ak: ak, code: code})
        .then(res => {
          localStorage.token = res.result;
          location.href = redirect;
        }).catch(err => {
          alert("登录失败！" + err.msg);
        });
    }else {
      getAuthUrl({redirect: (config.baseUrl + "/login" + location.search)})
        .then(res => location.href = res.result)
        .catch(err => {
          alert("登录失败！" + err.msg);
        });
    }
  },
  methods: {
  }
}
</script>
