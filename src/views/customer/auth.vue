<template>
  <div>
  </div>
</template>
<script>
import {authByCustomer, getAuthUrl} from "api/wx_mp";
let config = require('../../config');
let auth = authByCustomer;

export default {
  data() {
    return {

    }
  },

  computed: {},

  mounted() {
    this.authorize();
  },

  methods: {
    authorize(){
      let params = new URLSearchParams(location.search);
      let uid = params.get("uid");
      let ak = params.get("ak");
      let code = params.get("code");
      let that = this;

      if(!uid || !ak){
        alert("请使用正确的授权链接");
        return
      }

      if(code){
        auth({uid: uid, ak: ak, code: code})
          .then(res => {
            // 授权成功
            that.$router.replace({name:"Home"});
          })
          .catch(err => {
            alert(err.msg);
          });
      }else {
        getAuthUrl({redirect: `${config.baseUrl}/customer/auth?uid=${uid}&ak=${ak}`})
          .then(res => window.location.href = res)
          .catch(err => {
            alert(err.msg);
          });
      }
    }
  }
}
</script>
