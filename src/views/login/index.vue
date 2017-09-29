<template>
  <div class="login">
     <h1>hello world</h1>
     <div>
       <p><input v-model="user" type="text"></p>
       <p><input v-model="password" type="text"></p>
       <button @click="handleLogin" >提交</button>
     </div>
  </div>
</template>

<script>
import { loginByUsername } from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      loginByUsername(this.user, this.password).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="styl" scoped>

</style>
