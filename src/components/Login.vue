<template>
  <div class="login">
    <img id="loginOnChainBackgound" src="../../static/loginOnChainBackground.jpg">
    <img
      class="home" @click="backHome" src="../../static/homeButton.png">
    <div id="usernameContainer">
      <img id="iconUser" src="../../static/iconUser.png">
      <input
        id="username" type="text" name="username"
        placeholder="用户名" autofocus="autofocus"
        v-model="username">
    </div>
    <div id="passwordContainer">
      <img id="iconLock" src="../../static/iconLock.png">
      <input
        id="password" type="password" name="password"
        placeholder="密码" autocomplete="new-password"
        @keyup="enterLogin" v-model="password">
      <img id="iconEye" src="../../static/iconEye.png">
    </div>
    <img id="loginButton" src="../../static/loginButton.png" @click="login">
  </div>
</template>

<script>
import constants from '@/utils/constants';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // 真实接口
      this.axios.post(`${constants.ip}/login`, {
        username: this.username,
      }).then((response) => {
        window.userId = response.data.data;
        this.$router.push({ path: `${this.$route.query.operation}` });
        window.username = this.username;
        window.login = true;
      });
      // 不要接口
      // this.$router.push({ path: `${this.$route.query.operation}`,
      //   query: { username: this.username } });
      // window.login = true;
    },
    backHome() {
      this.$router.push({ path: '/' });
    },
    enterLogin(e) {
      if (e.key === 'Enter') {
        this.login();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
}

#loginOnChainBackgound {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.home {
  position: absolute;
  left: 80%;
  top: 8%;
  width: 6%;
  height: 6%;
  cursor: pointer;
}

#usernameContainer {
  position: absolute;
  left: 32.5%;
  top: 40%;
  width: 35%;
  height: 10%;
}

#iconUser {
  position: relative;
  top: 21%;
  width: 7%;
  height: 50%;
}

#username,
#password {
  width: 70%;
  height: 30%;
  padding-left: 10px;
  padding-bottom: 5px;
  border: 0;
  border-bottom: 1px solid #58f9f1;
  background-color: transparent;
  font-size: 20px;
  color: #fff;
  outline: none;
}

#username:hover,
#password:hover {
  border-bottom: 1px solid #3399ff;
}

#passwordContainer {
  position: absolute;
  left: 32.5%;
  top: 48%;
  width: 35%;
  height: 10%;
}

#iconLock {
  position: relative;
  top: 24%;
  width: 7%;
  height: 55%;
}

#iconEye {
  position: absolute;
  left: 83%;
  top: 25%;
  width: 6%;
  height: 45%;
}

#loginButton {
  position: absolute;
  left: 37%;
  top: 60%;
  background-color: transparent;
  width: 26%;
  height: 7%;
  cursor: pointer;
}
</style>

<style>
/*input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow:0 0 0 50px transparent inset;
  -webkit-text-fill-color: transparent;
}*/
input:-webkit-autofill {
  background-color: rgb(250, 255, 189);
  background-image: none;
  color: rgb(0, 0, 0);
}
</style>
