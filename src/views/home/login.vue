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
  watch: {
    username(value){
      localStorage.username = value
    }
  },

  mounted() {
    if(localStorage.username){
      this.username = localStorage.username
    }
    this.checkCode();
  },

  methods: {
    // 检查URL上是否带有code，如果有，则获取用户信息
    checkCode() {
      let code = new URLSearchParams(location.search).get("code")
      if(code){
        userLogin({code: code}).then(res=>{
          console.log(res)
          localStorage.token = res.token
          this.username = res.username
        })
      }
    },
    login() {
      if(!localStorage.token){
        window.location.href = 'http://localhost:8080/wechat/auth?redirect=' + encodeURIComponent("http://engineering.linqunxun.com/login")
      }
    },
  }
}
</script>
