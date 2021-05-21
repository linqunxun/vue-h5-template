<template>
  <div>
  </div>
</template>
<script>
import {authByEmployee, getAuthUrl} from "api/wx_mp";
let config = require('../../config');

export default {
  mounted() {
    let params = new URLSearchParams(location.search);
    let eid = params.get("eid");
    let ak = params.get("ak");
    let code = params.get("code");
    let that = this;

    if(!eid || !ak){
      alert("请使用正确的授权链接");
      return
    }

    if(code){
      authByEmployee({eid: eid, ak: ak, code: code})
        .then(res => alert("授权成功，请关闭当前页面！"))
        .catch(err => {
          alert(err.msg);
        });
    }else {
      getAuthUrl({redirect: `${config.baseUrl}/employee/auth?eid=${eid}&ak=${ak}`})
        .then(res => window.location.href = res.result)
        .catch(err => {
          alert(err.msg);
        });
    }
  }
}
</script>
