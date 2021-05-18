<!-- home -->
<template>
  <div>
    <van-field v-model="username" label="用户名" name="username"/>
    <van-button type="primary" @click="login">微信登录</van-button>
  </div>
</template>
<script>
import {login} from "api/user";
const userLogin = login

export default {
  data() {
    return {
      username: null
    }
  },

  computed: {},

  mounted() {
    this.checkCode();
  },

  methods: {
    // 检查URL上是否带有code，如果有，则获取用户信息
    checkCode() {
      let code = new URLSearchParams(location.search).get("code")
      if(code){
        userLogin({code: code}).then(res=>{
          console.log(res)
          localStorage.setItem("token", res.token)
          localStorage.setItem("username", res.username)
          
          location.replace(location.href.replace(location.search, ""))
        })
      }
    },
    login() {
      let token = localStorage.getItem("token")
      if(token){
        this.username = localStorage.getItem("username")
      }else {
        window.location.href = 'http://localhost:8080/wechat/auth?redirect=' + encodeURIComponent("http://engineering.linqunxun.com/#/login")
      }
    },
  }
}
</script>
