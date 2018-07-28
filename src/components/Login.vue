<template>
  <div class="login">
    <img id="loginOnChainBackgound" src="../../static/loginOnChainBackground.jpg">
    <div id="usernameContainer">
      <img id="iconUser" src="../../static/iconUser.png">
      <input id="username" type="text" name="username" placeholder="用户名" autofocus="">
    </div>
    <div id="passwordContainer">
      <img id="iconLock" src="../../static/iconLock.png">
      <input id="password" type="text" name="password" placeholder="密码">
      <img id="iconEye" src="../../static/iconEye.png">
    </div>
    <img id="loginButton" src="../../static/loginButton.png" @click="login">
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    login() {
      this.$router.push({ path: `${this.$route.query.operation}` });
    },
    backHome() {
      this.$router.push({ path: '/' });
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
  left: 85%;
  top: 20%;
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
