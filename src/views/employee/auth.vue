<template>
  <div>
  </div>
</template>
<script>
import {authByEmployee, getAuthUrl} from "api/wx_mp";
let config = require('../../config');
let auth = authByEmployee;

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
      let eid = params.get("eid");
      let ak = params.get("ak");
      let code = params.get("code");
      let that = this;

      if(!eid || !ak){
        alert("请使用正确的授权链接");
        return
      }

      if(code){
        auth({eid: eid, ak: ak, code: code})
          .then(res => that.$router.replace({name:"Home"}))
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
}
</script>
